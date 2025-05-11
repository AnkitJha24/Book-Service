const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  price: Number,
  stock: Number,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
