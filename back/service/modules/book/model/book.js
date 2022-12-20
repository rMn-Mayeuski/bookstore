const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    id: Number,
    bookName: String,
    bookImg: String,
    author: String,
    price: String,
    stars: Number
});
module.exports = mongoose.model('Book', bookSchema);