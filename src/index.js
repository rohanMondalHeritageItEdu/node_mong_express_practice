/*
// connect in a single file using iffy function (which execute where defined)
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import  'dotenv/config';
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.error(err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
*/
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
dotenv.config({
    path : './env'
})

connectDB()