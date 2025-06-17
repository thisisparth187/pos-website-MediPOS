const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // URL or path to the image
    required: false, // Assuming image is not always mandatory
  },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
