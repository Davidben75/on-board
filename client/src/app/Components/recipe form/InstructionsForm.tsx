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
                        className="border rounded-md mx-auto w-full leading-loose"
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
