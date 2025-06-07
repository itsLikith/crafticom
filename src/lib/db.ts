import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://saragadamlikith48:S2G0L0N5@sgln.dqkqb9f.mongodb.net/crafticom?retryWrites=true&w=majority');
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;