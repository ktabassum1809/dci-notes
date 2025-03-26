import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ msg: error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = await PostMessage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(201).json(updatePost);
  } catch (error) {
    res.status(409).json({ msg: error });
  }
};

export const deletePost = async (req, res) => {
  try {
    await PostMessage.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Post deleted successfully" });
  } catch (error) {
    res.status(409).json({ msg: error });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const post = await PostMessage.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(409).json({ msg: error });
  }
};
