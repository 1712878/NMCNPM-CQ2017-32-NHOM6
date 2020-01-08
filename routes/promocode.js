var express = require('express');
var router = express.Router();
const PromoCode = require('../models/promocode');
router.get('/', function(req, res, next) {
    res.render('pages/create-promo/index', { pageTitle: 'Tạo mã khuyến mãi' });
});
router.post('/', async function(req, res, next) {
    let promo = new PromoCode({
        promocode: req.body.code,
        quantity: req.body.quantity
    });
    try {
        await promo.save();
        res.render('pages/create-promo/index', { pageTitle: 'Tạo mã khuyến mãi' });
    } catch (err) {
        console.log("Không thể tạo mã");
        next();
    }
});
router.get('/check-info', async(req, res, next) => {
    try {
        let promo = await PromoCode.findOne({ promocode: req.query.promo });
        res.send(promo.toJSON());
    } catch (err) {
        res.send("wrong")
    }
});
module.exports = router;