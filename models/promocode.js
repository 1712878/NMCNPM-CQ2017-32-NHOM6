const mongoose = require('mongoose');
const PromoCode = new mongoose.Schema({
    promocode: { type: String, required: true },
    quantity: { type: String, required: true },
    start: { type: Date },
    end: { type: Date }
})
module.exports = mongoose.model('promocode', PromoCode, 'promocode');