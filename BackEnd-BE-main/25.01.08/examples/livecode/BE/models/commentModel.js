import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const commentSchema = new Schema({
  content: String,
});

export const Comment = model('Comment', commentSchema);
