import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  tags: { type: [String] },
  uploadDate: Date,
  user_ip: String,
});

const Image = mongoose.model("image", imageSchema);

export default Image;
