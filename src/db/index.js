import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`);
    console.log("MONOGODB CONNECTED !!!!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // exit app if DB fails
  }
};

export default connectDB;
