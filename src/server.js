import dotenv from "dotenv";
import connectdb from "./db/index.js";
import express from "express";

dotenv.config({
  path: "./env" // make sure you have an "env" file in your project root
});

const app = express();

// Connect DB, then start server
connectdb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed !!!", err);
  });
