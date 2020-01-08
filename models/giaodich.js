const mongoose = require('mongoose');
const GiaoDich = new mongoose.Schema({
    id:Number,
    bookId: { type: String, required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    time: { type: String, required: true },
    nameorder:{ type: String, required: true },
    address:{ type: String, required: true }
});
module.exports = mongoose.model('giaodich', GiaoDich, 'giaodich');