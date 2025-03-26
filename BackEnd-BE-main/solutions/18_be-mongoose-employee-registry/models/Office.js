import { Schema, model } from "mongoose";

const officeSchema = new Schema({
  street: { type: String, required: true },
  areaCode: { type: String, required: true },
  city: { type: String, required: true },
});

const Office = model("Office", officeSchema);

export default Office;
