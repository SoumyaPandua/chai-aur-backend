// import mongoose from "mongoose";

// import { DB_NAME } from "./constants";

// import express from "express";
// const app = express();

// ( async() => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${procee.env.DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Err: ", error);
//       throw error;
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`)
//     })

//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// } )();






import connectDB from "./db/index.db.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
})


connectDB();