import mongoose, {Schema} from "mongoose"

export interface Recipe {
        name : string, 
        description : string, 
        ingredients : Ingredient[]
        instructions : Array<String>
    }
    
interface Ingredient {
        quantity : number, 
        ingredient : string,
        unit : string
}

let recipeSchema = new Schema<Recipe>({
    name : {type : String, lowercase : true},
    description : {type: String, lowercase : true},
    ingredients : [{
        quantity : {type : Number},
        ingredient : {type : String, lowercase : true},
        unit : {type : String, lowercase : true}
    }],
    instructions : {type : [String]}
})

let RecipeModel = mongoose.model<Recipe>("Recipe", recipeSchema);

export default RecipeModel;
