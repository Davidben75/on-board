import { AddRecipe, GetAllRecipe, GetRecipeDetail } from '../controllers/RecipeController'
import express from 'express'

const recipeRouter = express.Router()

recipeRouter.get("/", GetAllRecipe);

recipeRouter.post("/recipe/add", AddRecipe);

recipeRouter.get("recipe/:id", GetRecipeDetail)

export default recipeRouter