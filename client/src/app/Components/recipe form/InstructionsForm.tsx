import { useGlobalContext } from '../../Context/formContext';
import React, { ChangeEvent } from 'react';

const InstructionsForm = () => {
    const { data, setData } = useGlobalContext();
    const { instructions } = data;

    const handleInstructionsChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setData((prev) => {
            const updatedInstructions = [...prev.instructions];
            updatedInstructions[index] = value;
            return {
                ...prev,
                instructions: updatedInstructions,
            };
        });
    };

    const handleRemoveInstructions = (index: number) => {
        setData((prev) => {
            const updatedInstructions = [...prev.instructions];
            updatedInstructions.splice(index, 1);
            return {
                ...prev,
                instructions: updatedInstructions,
            };
        });
    };

    const handleAddInstruction = () => {
        setData((prev) => ({
            ...prev,
            instructions: [...prev.instructions, ""],
        }));
    };

    return (
        <>
            <h1>Instructions:</h1>
            {instructions.map((instruction, i) => (
                <div key={i}>
                    <label>Step {i + 1}</label>
                    <input
                        value={instruction}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => handleInstructionsChange(i, e)}
                    />
                    <button
                        type="button"
                        className="bg-red-500 mt-6 px-4 pointer block rounded-md text-white"
                        onClick={() => handleRemoveInstructions(i)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button
                className="mt-6 px-4 pointer block bg-emerald-700 rounded-md text-white"
                type="button"
                onClick={handleAddInstruction}
            >
                Add Instruction
            </button>
        </>
    );
};

export default InstructionsForm;
