var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/home/index',{pageTitle: 'Trang chủ'});
});
router.get('/change-user-info', function(req, res, next) {
  res.render('pages/change-user-info/index', {pageTitle: 'Thay đổi thông tin người dùng'});
});
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
router.get('/top10-detail', function(req, res, next) {
  res.render('pages/top10-detail/index', {pageTitle: 'Thống kê top 10'});
});
module.exports = router;