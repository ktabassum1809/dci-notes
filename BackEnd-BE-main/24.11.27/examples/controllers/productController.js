import { data } from '../data.js';

export const getAllProducts = (req, res) => {
  res.send(data);
};
export const getSingleProduct = (req, res) => {
  res.send(data.find((product) => product.id == req.params.id));
};
export const addProduct = (req, res) => {
  res.send('product was added');
};
export const updateProduct = (req, res) => {
  res.send('product was updated');
};
export const deleteProduct = (req, res) => {
  res.send('product was deleted');
};
