import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/database';
import recipeRouter  from './routes/RecipeRouter';


dotenv.config()
const app = express();

connectDB



app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use(cors());

app.use(recipeRouter)

let PORT = 7500 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on : ${process.env.BASE_URL}${PORT}`)
    
})

