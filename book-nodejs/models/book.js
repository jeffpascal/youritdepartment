const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  description: {
    type: String,
    required: true
  }
});

const BookModel = mongoose.model("book-app", BookSchema);

exports.BookSchema = BookSchema;
exports.BookModel = BookModel;
