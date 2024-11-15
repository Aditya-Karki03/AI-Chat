import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri: string = process.env.MONGO_URI || "";
    await mongoose.connect(mongoUri);
    console.log("Connected to Database");
  } catch (error) {
    console.error("DB Connection Failed: " + error);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("DB disconnected Successfully!");
  } catch (error) {
    console.log("DB Disconnection failed: " + error);
  }
};

export { connectDB, disconnectDB };
