// Button Logic for our multistep form 
'use client'

type StepperControlProps = {
    handleClick : (action? : string, event? : React.ChangeEvent<HTMLInputElement>) => void,
    currentStep : number,
    steps : string[],
    
}

const StepperControl = ({handleClick,  currentStep, steps} : StepperControlProps) => {

    const isLastStep = currentStep === steps.length;
    const isFirstStep = currentStep === 1

   

    return (
        <div className="flex justify-around pb-4">
           

            {isLastStep 
            ? 
            <a href="/" className="mt-6 px-4 pointer block bg-indigo-600 rounded-md text-white">Go to home page  </a>
            :
            ""
            } 
            <>
            <button
            onClick={() => handleClick("previous")}
            className={`mt-6 px-4 pointer block bg-indigo-600 rounded-md text-white ${isFirstStep ? "hidden" : "" }
            ${isLastStep ? "hidden" : ""}`}
            type="button">
            Previous
            </button>

            
            <button 
            onClick={() => handleClick('next')}
            type={currentStep === steps.length ? 'submit' : 'button'}
            className={`mt-6 px-4 pointer block bg-indigo-600 rounded-md text-white ${isLastStep ? "hidden" : ""}`}
            >  
                    {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                </button>
           
            
            </>
                
           
        </div>
    );
};

export default StepperControl;