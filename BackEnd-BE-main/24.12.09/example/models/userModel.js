import { model, Schema } from 'mongoose';

// create user Schema (blueprint of the user data)

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String }
});

export const User=model('user',userSchema)
