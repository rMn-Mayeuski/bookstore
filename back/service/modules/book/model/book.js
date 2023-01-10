const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    id: Number,
    bookName: String,
    bookImg: String,
    author: String,
    stars: Number,
    describ: String,
    year: Number,
    publishe: String,
    pages: Number,
    price: String,
    language: String,
    format: String
});
module.exports = mongoose.model('Book', bookSchema);