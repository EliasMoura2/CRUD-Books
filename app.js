const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

// Initialization
const app = express();

//settings

//midlewares
app.use(morgan("dev"));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({ storage }).single("image"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/books", require("./ruotes/books"));

// 404 Handler
app.get((req, res) => {
  res.status(404).send("404 not found");
});

//server => en server.js

module.exports = app;
