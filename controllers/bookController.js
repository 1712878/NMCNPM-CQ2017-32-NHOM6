const Book = require('../models/book');
module.exports.bookInfoController = (req, res, next) => {
    let book = await Book.find({});
    res.render('/pages/book-infomation/index', {

    });
}