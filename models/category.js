const mongoose = require('mongoose');
const Category = new mongoose.Schema({
    categoryid:{ type: String, required: true },
    name: { type: String, required: true }
})
module.exports = mongoose.model('category', Category, 'category');