
import { model, Schema } from 'mongoose';

const recordSchema = new Schema({
  title: {type:String,required:true},
  artist: String,
  price: Number,
  image:String,
  description:String

});

export const Record = model('Record', recordSchema);

