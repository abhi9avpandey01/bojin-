import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
  path: "./.env" // make sure you have an "env" file in your project root
});

const app = express();

// Connect DB, then start server
connectDB();

app.use("/", (req,res) => {
    res.json({message: "API IS RUNNING !!!!"})
});

app.use("/api/test", (req, res) => {
   res.json({ message: "API is working properly" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`\n🚀 Server running on PORT:${port}`);
});