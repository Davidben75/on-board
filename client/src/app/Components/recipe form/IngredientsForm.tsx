import { useGlobalContext } from "../../Context/formContext";
import { Ingredient } from "../../models/recipe";
import { ChangeEvent, useEffect, useState } from "react";

const IngredientsForm = () => {
    const { data , setData } = useGlobalContext();
    // Destructuring data
    const {ingredients} = data

    

    const units = ["gr", "kg", "litre", "cl", "ml"];

  

    const handleIngredientChange = (index: number, e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(value)
        setData((prevData) => {
            const updatedIngredients = [...prevData.ingredients];
            updatedIngredients[index] = {
                ...updatedIngredients[index],
                [name]: name === "quantity" ? parseInt(value) : value,
            };

            return {
                ...prevData,
                ingredients: updatedIngredients,
            };
        });
        
    };

   
   

    // Function to add ingredients 
    const handleAddIngredrient = () => {
       setData((prev) => ({
         ...prev,
         ingredients : [...prev.ingredients,
         {
            quantity : 0,
            ingredient : "",
            unit : ""
         }]
       }))
    }

    // Function to remove ingredient
    const handleRemoveIngredient = (index: number) => {
        setData((prevData) => {
            const updatedIngredients = [...prevData.ingredients];
            updatedIngredients.splice(index, 1); // Remove the ingredient at the specified index

            return {
                ...prevData,
                ingredients: updatedIngredients,
            };
        });
    }

    return (
        <>
              <h1 className="text-lg font-semibold mb-4">List ingredients</h1>

                {ingredients.map((el, i) => (
                    <div key={i} className="flex flex-col min-[1000px]:flex-row md:space-x-4 mb-4">
                        <div className="flex-grow ">
                        <label className="block mb-1">
                            Ingredient:
                            <input
                            type="text"
                            name="ingredient"
                            value={el.ingredient || ""}
                            onChange={(event) => handleIngredientChange(i, event)}
                            placeholder="Flour"
                            className='block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </label>
                        </div>

                        <div className="flex-grow">
                        <label className="block mb-1">
                            Quantity:
                            <input
                            type="text"
                            name="quantity"
                            placeholder="150"
                            min={0}
                            value={el.quantity || ""}
                            onChange={(event) => handleIngredientChange(i, event)}
                            className='block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </label>
                        </div>

                        <div className="flex-grow">
                        <label className="block mb-1">
                            Unit:
                            <select
                            name="unit"
                            value={el.unit !== undefined ? el.unit : ""}
                            onChange={(event) => handleIngredientChange(i, event)}
                            className='border rounded-md px-2 py-1 w-full'
                            >
                            <option value="" disabled>Select Unit</option>
                            <option value=" "> - - </option>
                            {units.map((unit, index) => (
                                <option key={index} value={unit}>
                                {unit}
                                </option>
          ))}
        </select>
      </label>
    </div>

    <button
      type="button"
      className="bg-red-500 mt-4 md:mt-0 px-4 py-2 inline-block md:inline-block rounded-md text-white"
      onClick={() => handleRemoveIngredient(i)}
    >
      Remove
    </button>
  </div>
                    
                ))}
        
            
            <button 
            className="mt-6 px-4 pointer block bg-emerald-700 rounded-md text-white"
            type="button" 
            onClick={handleAddIngredrient}>
                Add ingredient
            </button>
        </>
    );
};

export default IngredientsForm;
