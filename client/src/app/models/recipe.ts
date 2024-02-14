

export type Recipe = {
    name : string, 
    description : string, 
    ingredients : Ingredient[]
    instructions : Array<string>
}

export type Ingredient = {
    quantity : number, 
    ingredient : string,
    unit : string
}


