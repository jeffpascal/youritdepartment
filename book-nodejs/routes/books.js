const { BookModel } = require("../models/book");
const express = require("express");


const router = express();
router.get("/", async (req, res) => {
  const books = await BookModel.find().sort("name");
  res.json(books);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  let book = new BookModel({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description
  });
  book = await book.save();

  res.json(book);
});

module.exports = router;
