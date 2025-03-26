import mongoose from 'mongoose';
import { Schema, model,Types } from 'mongoose';

const addressSchema = new Schema({
  streetName: { type: String, required: true },
  streetNumber: { type: String, required: true },
  zip: { type: Number, required: true},
  city: { type: String, required: true},
});

export const Address = model('Address', addressSchema);
