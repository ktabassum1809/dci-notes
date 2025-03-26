import mongoose from "mongoose";
import validator from "validator";

//Define a schema for the User
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "The first name is required!"],
    trim: true,
    minLength: 4,
  },
  lastName: {
    type: String,
    required: [true, "The last name is required!"],
    trim: true,
    minLength: [4, "minimum should be at least 4 chars ..."],
    maxLength: 8,
  },
  email: {
    type: String,
    required: [true, "The email is required!"],
    validate: [validator.isEmail, "Email is not valid!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The user needs to have a password"],
    minLength: 3,
  },
  confirmPassword: {
    type: String,
    required: [true, "Confrim your password!"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Password do not mutch!!",
    },
  },
  age: Number,
});

userSchema.pre("save", function (next) {
  this.confirmPassword = undefined;
  next();
});

userSchema.pre("save", function (next) {
  this.firstName =
    this.firstName.charAt(0).toUpperCase() +
    this.firstName.slice(1).toLowerCase();
  next();
});

const User = mongoose.model("user", userSchema);

export default User;
