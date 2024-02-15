'use client'
import StepperControl from '@/app/Components/recipe form/form control/StepperControl';
import IngredientsForm from '@/app/Components/recipe form/IngredientsForm';
import InstructionsForm from '@/app/Components/recipe form/InstructionsForm';
import RecipeAddSucces from '@/app/Components/recipe form/RecipeAddSucces';
import RecipeInfo from '@/app/Components/recipe form/RecipeInfo';
import RecipeNameForm from '@/app/Components/recipe form/RecipeNameForm';
import { GlobalContextProvider, GlobalContext } from '@/app/Context/formContext';
import { Recipe } from '@/app/models/recipe';
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [data, setData] = useState<Recipe>({
        name: "",
    description: "",
    ingredients: [{quantity : 0, 
        ingredient : "",
        unit : ""
    }],
    instructions: [""],
    })
    

    

    const steps = [
        "Recipe title",
        "Recipe ingredients",
        "Recipe instructions",
        "Review",
        "Succes"
    ];

    const handleFormSubmit =  (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const addData = async () => {
            // Ensure you have the updated data
            try {
                await axios.post(`${process.env.NEXT_PUBLIC_API}/recipe/add`, data)
                    .then((res) => {
                        console.log(res.data);
                    });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
        
        addData()
    };
    

    const handleFormChange = (action?: string, e?: React.ChangeEvent<any>): void => {
        
        let newStep = currentStep;

        switch (action) {
            case "next":
              // Check validation when moving to the next step
              if (validationRequiredFields(data)) {
                newStep ++ ;
                setErrorMessage(""); // Clear error message on successful move
              } else {
                setErrorMessage("Please fill in all required fields");
                return;
              }
              break;
            case "previous":
              newStep --;
              setErrorMessage(""); // Clear error message when going back
              break;
            default:
              break;
          }
        
          // Check boundaries
          if (newStep > 0 && newStep <= steps.length) {
            setCurrentStep(newStep);
          }
        
    };

    const validationRequiredFields = (formData: Recipe): boolean => {
        switch (currentStep) {
          case 1:
            return formData.name.trim() !== "";
          case 2:
            return (
              formData.ingredients.length > 0 &&
              formData.ingredients.every(
                (el) => el.ingredient.trim() !== "" && el.quantity !== 0
              )
            );
          case 3:
            return (
              formData.instructions.length > 0 &&
              formData.instructions.every((el) => el.trim() !== "")
            );
          default:
            return true;
        }
      };

    const displaySteps = (step: number) => {
        switch (step) {
            case 1:
                return <RecipeNameForm />;
            case 2:
                return <IngredientsForm />;
            case 3:
                return <InstructionsForm />;
            case 4:
                return <RecipeInfo />;
            case 5:
                return <RecipeAddSucces />;
            default:
                return null;
        }
    };

    return (
          <>
          <section className='mx-auto max-w-6xl py-20 px-12 lg:px-24  mb-24'> 
          <GlobalContext.Provider value={{data, setData}}>
                <form method='post' onSubmit={handleFormSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col rounded-lg'>

                    {errorMessage && (
                        <span className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                        <p className="font-bold">{errorMessage}</p>
                        
                      </span>
                      
                    )}
                    {displaySteps(currentStep)}
                    <StepperControl handleClick={handleFormChange}  currentStep={currentStep} steps={steps} />

                    
                </form>
            </GlobalContext.Provider>
          </section>
            
        </>
    );
};

export default Page;
