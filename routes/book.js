var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var Book = require('../models/book');

router.get('/book-summary', function(req, res, next) {
    res.render('pages/book-summary/index', { pageTitle: 'Thống kê sách' });
});
router.get('/book-infomation', async function(req, res, next) {
    let books = await Book.find({}).lean();
    console.log(books);
    res.render('pages/book-infomation/index', { pageTitle: 'Tra cứu thông tin sách',listbook: books});
});

router.get('/change-book-info', function(req, res, next) {
    res.render('pages/change-book-info/index', { pageTitle: 'Thay đổi thông tin sách' });
});

module.exports = router;