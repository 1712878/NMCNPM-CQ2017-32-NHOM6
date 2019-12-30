var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var Book = require('../models/book');

router.get('/book-summary', function(req, res, next) {
    res.render('pages/book-summary/index', { pageTitle: 'Thống kê sách' });
});
router.get('/book-infomation', async function(req, res, next) {
    let minCost = req.query.minPrice;
    let maxCost = req.query.maxPrice;
    if (!minCost) minCost = Number.MIN_SAFE_INTEGER;
    if (!maxCost) maxCost = Number.MAX_SAFE_INTEGER;
    let booksQuery = Book.find({ cost: { $lte: maxCost, $gte: minCost } }).lean();
    if (req.query.bookname)
        booksQuery = booksQuery.where('name').regex(req.query.bookname);
    let books = await booksQuery.exec();
    res.render('pages/book-infomation/index', { pageTitle: 'Tra cứu thông tin sách', listbook: books });
});

router.get('/change-book-info', function(req, res, next) {
    res.render('pages/change-book-info/index', { pageTitle: 'Thay đổi thông tin sách' });
});

module.exports = router;