import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  name: String,
  date: Date,
  score: Number,
});

const Score = mongoose.model("Score", scoreSchema);

export default Score;
