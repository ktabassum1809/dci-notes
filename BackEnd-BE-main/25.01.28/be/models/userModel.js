import { model, Schema, Types } from 'mongoose';
import bcrypt from 'bcrypt';

const addressSchema = new Schema({
  street: String,
  nr: String,
  zip: String,
});
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {type:String,enum:["customer","admin"],default:'customer' },
  address: addressSchema,
  records: [{ type: Types.ObjectId, ref: 'Record' }],
  
});

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      next();
    }

    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.auth = async function (plainTextPass) {
    return await bcrypt.compare(plainTextPass, this.password)
  }


export const User = model('User', userSchema);
