import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    const conn = await mongoose.connect(MONGO_URI);
    console.log("Mongo DB Connected:", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to Mongo DB", error);
    process.exit(1);
  }
};
