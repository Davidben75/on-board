import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = mongoose.connect(process.env.DB_URI)

mongoose.connection.on("open", () => {
    console.log(`Connect to the database`)
})

mongoose.connection.on("erro", () => {
    console.log(`Cannot connect to the database`)
})

export default connectDB; 
