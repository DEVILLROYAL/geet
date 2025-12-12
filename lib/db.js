import mongoose from "mongoose";

export async function connectDB(){
    if (mongoose.connect.readyState === 1) return;

    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
}