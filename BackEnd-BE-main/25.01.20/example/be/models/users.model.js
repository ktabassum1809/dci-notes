import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String
 
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role:{
    type:String,
    enum:["customer","admin"],
    default:"customer"
  }
 
});


userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified('password')) {
          next();
        }
        
        // hash the password
        console.log('pwd hey')
        console.log(this.password)
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
        
    } catch (error) {
        next(error)
    }
});


// auth method
userSchema.methods.auth = async function (plainTextPass) {
  return await bcrypt.compare(plainTextPass, this.password)
}

export const User = model("User", userSchema);
