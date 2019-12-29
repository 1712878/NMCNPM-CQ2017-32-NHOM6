var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var Book = require('../models/book');
var promoRouter = require('./promocode');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('pages/home/index', { pageTitle: 'Trang chủ' });
});

router.get('/checkout', function(req, res, next) {
    res.render('pages/checkout/index', { pageTitle: 'Thanh toán tại quầy' });
});
router.use('/create-promo', promoRouter);
router.get('/statistic', function(req, res, next) {
    res.render('pages/statistic/index', { pageTitle: 'Thống kê' });
});
router.get('/manager-fee', function(req, res, next) {
    res.render('pages/manager-fee/index', { pageTitle: 'Nhập tiền lương nhân viên, điện, nước' });
});
router.get('/manager-order', function(req, res, next) {
    res.render('pages/manager-order/index', { pageTitle: 'Quản lí đơn hàng' });
});
router.get('/update-order', function(req, res, next) {
    res.render('pages/manager-order/update', { pageTitle: 'Quản lí đơn hàng' });
});
router.get('/forgot-password', function(req, res, next) {
    res.render('pages/forgot-password/index', { pageTitle: 'Quên mật khẩu' });
});
router.get('/login', (req, res, next) => {
    res.render('pages/login/index', { pageTitle: 'Đăng nhập' });
})
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}));
module.exports = router;