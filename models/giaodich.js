const mongoose = require('mongoose');
const GiaoDich = new mongoose.Schema({
    bookId: { type: String, required: true },
    quantity: { type: String, required: true },
    total: { type: Number, required: true }
});
module.exports = mongoose.model('giaodich', GiaoDich, 'giaodich');