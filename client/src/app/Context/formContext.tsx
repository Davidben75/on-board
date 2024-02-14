'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import {Recipe } from '../models/recipe'



interface ContextProps {
    data : Recipe
    setData : Dispatch<SetStateAction<Recipe>>
}

// This is the default value that will be provided to the context when a component does not have a matching GlobalContext.Provider in its ancestor tree. It's an object with two properties:
// data: []: This sets the initial value for the data property in the context to an empty array.
// setData: (): Recipe[] => []: This sets the initial value for the setData property in the context to a function that returns an empty array of Recipe. Note that the provided function is not expected to be used; it's just a placeholder for the initial value.
// It's important to note that this default value is overridden when a component is wrapped inside a GlobalContext.Provider higher up in the component tree.

export const GlobalContext = createContext<ContextProps>({
    data : {
        name: "",
    description: "",
    ingredients: [
        {quantity : 0, 
            ingredient : "",
            unit : ""
        }
    ],
    instructions: [],
    },
    setData: () => {
        throw new Error('setData function should not be called outside of GlobalContextProvider');
    },
});

export const GlobalContextProvider = ({children} : any) => {
    const [data, setData] = useState<Recipe>({
        name: "",
    description: "",
    ingredients: [{quantity : 0, 
        ingredient : "",
        unit : ""
    }],
    instructions: [],
    })
    return (
        <GlobalContext.Provider value={{data, setData}}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = (): ContextProps => {
    const context = useContext(GlobalContext);
   
    // if (!context) {
    //   throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    // }
  
    return context;
  };