import User from "../models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password -_id");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "User not found" });
  }
};

export const createUser = async (req, res) => {
  try {
    // const {firstName, lastName, email, password}=req.body
    // const user = await User.findOne({email})
    // if(user) return res.send("User with this email already exists!")
    const user = req.body;
    const newUser = await User.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ msg: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password -_id")
      .limit(2)
      .sort("name");
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ msg: errror.message });
  }
};
