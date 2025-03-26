import mongoose from 'mongoose';
import { Schema, model,Types } from 'mongoose';

const roleSchema = new Schema({
  name: { type: String },
  employees: [{type:Types.ObjectId, ref: "Employee"}],
  
});

export const Role = model('Role', roleSchema);
