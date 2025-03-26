import mongoose from 'mongoose';
import { Schema, model,Types } from 'mongoose';

const officeSchema = new Schema({
  streetName: { type: String, required: true },
  zip: { type: Number, required: true},
  city: { type: String, required: true},
  employees:[{type:Types.ObjectId, ref:"Employee"}]
});

export const Office = model('Office', officeSchema);
