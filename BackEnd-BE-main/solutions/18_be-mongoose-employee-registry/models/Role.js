import { Schema, Types, model } from "mongoose";

const roleSchema = new Schema({
  name: { type: String, required: true },
  employees: [{ type: Types.ObjectId, ref: "Employee" }],
});

const Role = model("Role", roleSchema);

export default Role;
