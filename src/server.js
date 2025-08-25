import dotenv from "dotenv";
import connectdb from "./db/index.js";
import express from "express";

dotenv.config({
  path: "./env" // make sure you have an "env" file in your project root
});

const app = express();

// Connect DB, then start server
connectdb();


app.use("/", () => {
   console.log("API is running...");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`\n🚀 Server running on PORT:${port}`);
});