import RecipeModel from "../models/RecipeModel"
import { Request, Response } from "express"

// ALL RECIPE
export const GetAllRecipe = async (req : Request, res : Response) => {
    try {
        let recipes =  await RecipeModel.find({})
        res.status(200).json(recipes)
    } catch (error) {
        res.status(400).json(error.message)
        console.log('Error fetching all recipes')
    }
};

export const AddRecipe = async (req : Request, res : Response) => {
    try {
        const {name, ingredients, description, instructions} = req.body
        let newRecipe = new RecipeModel({
            name : name,
            description : description,
            ingredients : ingredients,
            instructions : instructions
        })

        await newRecipe.save()
        res.status(200).json(`Recipe add sucessfully`)
    } catch (error) {
        res.status(400).json(error.message)
        console.log('Error adding new recipe')
    }   
};

export const GetRecipeDetail = async (req : Request, res : Response) => {
    try {
        const {id} = req.params
        let recipe = await RecipeModel.findById({id})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json(error.message)
    }
}