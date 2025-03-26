import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default function connectDB() {
  mongoose.connection.on("connected", () =>
    console.log(
      `✅ Successfully connected to the database: "${mongoose.connection.name}"`
    )
  );

  mongoose.connection.on("error", (error) => console.log("DB Error", error));

  return mongoose.connect(process.env.DB_URI);
}
