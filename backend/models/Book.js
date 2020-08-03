const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, requiered: true },
  author: { type: String, requiered: true },
  isbn: { type: String, requiered: true },
  imagePath: { type: String },
  created_at: { type: Date, default: Date.now },
});

/*
create_at:  {type : Date, default: Date.now}
*/

module.exports = model("Book", BookSchema);
