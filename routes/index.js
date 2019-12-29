var express = require('express');
var router = express.Router();
var passport = require('../config/passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('pages/home/index', { pageTitle: 'Trang chủ' });
});
router.get('/book-infomation', function(req, res, next) {
    res.render('pages/book-infomation/index', { pageTitle: 'Tra cứu thông tin sách' });
});
router.get('/change-book-info', function(req, res, next) {
    res.render('pages/change-book-info/index', { pageTitle: 'Thay đổi thông tin sách' });
});
router.get('/checkout', function(req, res, next) {
    res.render('pages/checkout/index', { pageTitle: 'Thanh toán tại quầy' });
});
router.get('/create-promo', function(req, res, next) {
    res.render('pages/create-promo/index', { pageTitle: 'Tạo mã khuyến mãi' });
});
router.get('/book-summary', function(req, res, next) {
    res.render('pages/book-summary/index', { pageTitle: 'Thống kê sách' });
});
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
    failureRedirect: '/',
    successRedirect: '/asdf'
}));
module.exports = router;