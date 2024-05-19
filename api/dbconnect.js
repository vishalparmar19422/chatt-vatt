import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()



export const connectDB = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected ");

    } catch (error) {
        console.log("error connecting to database");
        throw new Error(error)

    }
}
