import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const addressSchema = new Schema({
  street: { type: String },
  nr: String,
  city: { type: String },
},
{ _id: false }
);

const userSchema = new Schema(
  {
    name: { type: String, default: 'Joe Black' },
    email: { type: String, required: true, unique: true },
    homeaddress: addressSchema,
    billingaddress: addressSchema,
    profilepic: String,
    hobbies: {
      type: [],
      default: [],
    },
    password: { type: String, required: true, minlength: 8, maxlength: 50 },
    age: { type: Number, min: 18, max: 150 },
    married: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = model('User', userSchema);
