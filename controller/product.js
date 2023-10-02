import fs from "fs";
import { Product } from "../model/product.js";

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

// API End Points

// CREATE POST METHOD /products
export const createProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(400).json(error));
};

// Read GET METHOD /products
//Refer:https://mongoosejs.com/docs/queries.html
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Read GET METHOD BASED ON ID /products/:id
// example:http://localhost:8080/api/products/651667296a266f8c75dfeca7
export const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id).exec();
  res.json(product);
};

// REPLACE Product PUT METHOD /products/:id
export const replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log("error ", err);
  }
};

// UPDATE Product PATCH METHOD /products/:id
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log("error ", err);
  }
};

// DELETE Product DELETE METHOD  /products/:id
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete({ _id: id });
    res.status(201).json(product);
  } catch (err) {
    console.log("error ", err);
  }
};
