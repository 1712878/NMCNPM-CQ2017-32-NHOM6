const mongoose = require('mongoose');
const Book = new mongoose.Schema({
    bookid: { type: String, required: true },
    name: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String },
    cost: { type: Number },
    quantity: { type: Number },
    category: { type: String }
})
module.exports = mongoose.model('book', Book, 'book');