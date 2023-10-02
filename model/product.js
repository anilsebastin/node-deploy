import mongoose from "mongoose";
const { Schema } = mongoose;

// Product Schema
const productSchema = new Schema({
  title: { type: String, required: [true, "Please enter a valid title name"] },
  description: { type: String },
  price: {
    type: Number,
    min: [0, "Wrong price entered"],
    required: [true, "Please enter a valid price"],
  },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discount"],
    max: [5, "Wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
    default: 0,
  },
  stock: Number,
  brand: { type: String, required: [true, "Please enter a valid brand name"] },
  category: {
    type: String,
    required: [true, "Please enter a valid category name"],
  },
  thumbnail: {
    type: String,
    required: [true, "Please enter a valid thumbnail link"],
  },
  images: [String],
});

export const Product = mongoose.model("Product", productSchema);
