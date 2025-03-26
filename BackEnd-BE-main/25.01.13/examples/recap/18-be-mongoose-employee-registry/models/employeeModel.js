import mongoose from 'mongoose';
import { Schema, model,Types } from 'mongoose';






const employeeSchema = new Schema({
  fullName: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactAddress:{type:Types.ObjectId, ref: "Address", required:true},
  office:{type:Types.ObjectId, ref: "Office", required:true},
  roles:[{type:Types.ObjectId, ref: "Role", required:true}],
});

export const Employee = model('Employee', employeeSchema);
