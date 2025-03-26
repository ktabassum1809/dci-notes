import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("postmessage", postSchema);

export default PostMessage;
