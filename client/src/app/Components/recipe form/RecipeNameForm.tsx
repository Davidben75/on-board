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
        <div className='flex flex-col'>
        <label className='my-3'>
          Title * : 
            <input 
            type="text"  
            value={data?.name || ""}
            name="name"
            required
            onChange={handleNameChange}
            className='border rounded-md px-2' 
            placeholder='Banana Cake'/>
        </label>

        <label className='my-3'>
            Description of your recipe :
            <input 
                type="text" 
                value={data?.description || ""}
                name="description"
                onChange={handleNameChange}
                required
                className='border rounded-md px-2' 
                placeholder='Best Banana cake ever'            
            />
        </label>
        </div>
        
        </>
    );
};

export default RecipeNameForm;