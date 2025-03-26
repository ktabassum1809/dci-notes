import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const addressSchema = new Schema(
  {
    street: {
      type: String,
      /* required: true, */
      trim: true,
    },
    city: {
      type: String,
      /* required: true, */
      trim: true,
    },
    postCode: {
      type: String,
     /*  required: true, */
      trim: true,
    },
  },
  { _id: false }
);

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
  },

  age: {
    type: Number,
  },

  email: {
    type: String,
    //required: [true, 'Sorry email must be provided'],
   // unique:true,
  /*   match:[/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
       "Please enter a valid email"] */
  },

  password: {
    type: String,
  },

  passwordConfirm: {
    type: String,
    //required: [true, 'Password confirmation is required'],
  },
 /*  address: addressSchema, */
});

export const User = model('User', userSchema);
