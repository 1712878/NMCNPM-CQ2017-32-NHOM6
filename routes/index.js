var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/home/index',{pageTitle: 'Trang chủ'});
});
router.get('/book-infomation', function(req, res, next) {
  res.render('pages/book-infomation/index', {pageTitle: 'Tra cứu thông tin sách'});
});
router.get('/change-book-info', function(req, res, next) {
  res.render('pages/change-book-info/index', {pageTitle: 'Thay đổi thông tin sách'});
});
router.get('/checkout', function(req, res, next) {
  res.render('pages/checkout/index', {pageTitle: 'Thanh toán tại quầy'});
});
router.get('/create-promo', function(req, res, next) {
  res.render('pages/create-promo/index', {pageTitle: 'Tạo mã khuyến mãi'});
});
//refffff
router.get('/forgot-password', function(req, res, next) {
  res.render('pages/forgot-password/index', {pageTitle: 'Quên mật khẩu'});
});
router.get('/login', function(req, res, next) {
  res.render('pages/login/index', {pageTitle: 'Đăng nhập'});
});
router.get('/manager-order', function(req, res, next) {
  res.render('pages/manager-order/index', {pageTitle: 'Quản lí đơn hàng'});
});
router.get('/manager-product', function(req, res, next) {
  res.render('pages/manager-product/index', {pageTitle: 'Quản lí sản phẩm'});
});
router.get('/manager-stall', function(req, res, next) {
  res.render('pages/manager-stall/index', {pageTitle: 'Quản lí gian hàng'});
});
router.get('/manager-users', function(req, res, next) {
  res.render('pages/manager-users/index', {pageTitle: 'Quản lí người dùng'});
});
router.get('/sales-detail', function(req, res, next) {
  res.render('pages/sales-detail/index', {pageTitle: 'Thống kê bán hàng'});
});

module.exports = router;