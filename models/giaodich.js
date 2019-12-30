const mongoose = require('mongoose');
const GiaoDich = new mongoose.Schema({
    bookId: { type: String, required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    time: { type: Date, required: true }
});
module.exports = mongoose.model('giaodich', GiaoDich, 'giaodich');