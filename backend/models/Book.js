const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, requierd: true },
  imagePath: { type: String },
  created_at: { type: Date, default: Date.now },
});

/*
create_at:  {type : Date, default: Date.now}
*/

module.exports = model("Book", BookSchema);
/*  
Poner en minuscula 
module.exports = model("Book", bookSchema);
*/
