import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  streetName: { type: String, required: true },
  streetNumber: { type: String, required: true },
  areaCode: { type: Number, required: true },
  city: { type: String, required: true },
});

const Address = model("Address", addressSchema);
export default Address;
