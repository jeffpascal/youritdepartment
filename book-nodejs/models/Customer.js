const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  mail: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  phone: {
    type: String,
    minlength: 6
  },
  description: {
    type: String,
    required: true
  }
});

const CustomerModel = mongoose.model("book-app", CustomerSchema);

exports.BookSchema = BookSchema;
exports.CustomerModel = CustomerModel;
