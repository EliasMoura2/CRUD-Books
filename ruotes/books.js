const { Router } = require("express");
const router = Router();

/*
const {Router} = require('express')
const router = Router();
*/

/* router.get("/", (req, res) => {
  res.send("Welcome");
}); */

router.get("/", (req, res) => {
  res.json({ text: "books" });
});
module.exports = router;
