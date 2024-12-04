// Please don't change the pre-written code
// Import the necessary modules here

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let client;
const baseUrl = process.env.MONGODB || "0.0.0.0:27017";

export async function connectToMongoDB() {
  try {
    const clientInstance = await MongoClient.connect(
      `mongodb://${baseUrl}/confession`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    client = clientInstance;
  } catch (err) {
    console.log("Error in connecting with mongo");
  }
}

export const getDB = () => {
  // Write your code here
  // Implement this function to return the instance of the 'confession' database.
  return client.db();
};

export const closeMongoDBConnection = async () => {
  try {
    if (client) {
      await client.close();
      console.log("MongoDB connection closed");
    } else {
      console.warn("MongoDB client not available for closing");
    }
  } catch (err) {
    console.error("Error closing MongoDB connection:", err);
  }
};
