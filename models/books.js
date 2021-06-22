const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{type: String, required: true}],
  description: String,
  image: {type: String, trim: true},
  link: {type: String, trim: true},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;