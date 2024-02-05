import mongoose from "mongoose";
import chalk from "chalk"; // Assuming you have chalk installed

import { dbURL } from "./config.js";

const connectDB = async () => {
  try {
    // success
    await mongoose.connect(dbURL, {
      
    
    });

    console.log(chalk.green.bold(`Connected to the database: ${dbURL}`));
  } catch (error) {
    // error Message
    console.error(`Error connecting to the database: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
