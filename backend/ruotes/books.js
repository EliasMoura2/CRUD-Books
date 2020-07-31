const { Router } = require("express");
const router = Router();

/*
const express = require('express')
const router = express.Router();
*/

/* router.get("/", (req, res) => {
  res.send("Welcome");
}); */

const Book = require("../models/Book");

router.get("/", async (req, res) => {
  // res.json({ text: "books" });
  const books = await Book.find();
  res.json(books);
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  // res.send("received");
  const { title, author, isbn } = req.body;
  const imagePath = "/uploads/" + req.file.filename;
  const newBook = new Book({ title, author, isbn, imagePath });
  // console.log(newBook);
  await newBook.save();
  res.json({ message: "Book saved" });
});

router.delete("/:id", async (req, res) => {
  // console.log(req.params.id);
  // const book = await Book.findByIdAndDelete(req.params.id);
  // console.log(book);
  // res.send("Deleting book");
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
