const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema
const productSchema = new Schema({
  title:  {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price:   {
    type: Number,
    required: true,
    min: [0, 'wrong price']
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: [0, 'wrong min discount'],
    max: [50, 'wrong max discount']
  },
  rating: {
    type: Number,
    min: [0, "too short"],
    max: [5, "too long"]
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  images: [String]
});

// Model
exports.Product = mongoose.model("Product", productSchema);
