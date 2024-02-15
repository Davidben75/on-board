import { useGlobalContext } from '@/app/Context/formContext';
import React, { ChangeEvent } from 'react';



const RecipeNameForm = () => {
    const {data, setData} = useGlobalContext()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name ,value } = e.target;
    
        setData((prev) => ({
            ...prev,
            [name] : value,
        }));
    }

    return (
        <>
        
        <label className=''>
          Title * : 
            <input 
            type="text"  
            value={data?.name || ""}
            name="name"
            required
            onChange={handleNameChange}
            className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
            placeholder='Banana Cake'/>
        </label>

        <label className=''>
            Description of your recipe :
            <input 
                type="text" 
                value={data?.description || ""}
                name="description"
                onChange={handleNameChange}
                required
                className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                placeholder='Best Banana cake ever'            
            />
        </label>
        
        
        </>
    );
};

export default RecipeNameForm;