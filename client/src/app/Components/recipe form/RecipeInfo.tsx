import { useGlobalContext } from '../../Context/formContext';
import React from 'react';

const RecipeInfo = () => {
    const {data} = useGlobalContext()
    return (
        <>
        <h1>Check your Recipe ! </h1>
        <p>  Recipe name : {data?.name} </p>
        <p> Description : {data.description}</p>

        <p>List of ingredients : </p>
        <ul>
            {data?.ingredients.map((ingredient, i) => 
            <li key={i}>{ingredient.quantity} {ingredient.unit} of {ingredient.ingredient}</li>
            )}
        </ul>
        
        <p>List of instruction : </p>
        <ul>
            {data.instructions.map((instruction, i) => 
                <li key={i}>{instruction}</li>
            )}
        </ul>
       
        </>
    );
};

export default RecipeInfo;