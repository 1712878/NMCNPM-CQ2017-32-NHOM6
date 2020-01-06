var express = require('express');
var router = express.Router();
var passport = require('passport');
var Book = require('../models/book');
var promoRouter = require('./promocode');
var checkoutController = require('../controllers/checkoutController');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('pages/login/index', { pageTitle: 'Trang chủ' });
});

router.get('/checkout', async function(req, res, next) {
    res.render('pages/checkout/index', { pageTitle: 'Thanh toán tại quầy',Notification:''});
});
router.post('/checkout', async(req, res, next) => {
    checkoutController.checkout(req, res, next);
})
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
});
  /* Handle Login POST */
router.post('/', passport.authenticate('login', {
    successRedirect: '/statistic',
    failureRedirect: '/'
}));
router.get('/signup', function(req, res, next) {
    res.render('pages/signup/index',{ pageTitle: 'Đăng ký'} );
});
/* Handle SignUp POST */
router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup' 
}));
module.exports = router;