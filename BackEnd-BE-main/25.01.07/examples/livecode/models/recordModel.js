import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const recordSchema = new Schema({
  title: {type:String},
  artist: String,
  price: Number,

});

export const Record = model('Record', recordSchema);

