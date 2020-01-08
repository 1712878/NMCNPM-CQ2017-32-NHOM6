 const Book = require('../models/book');
 module.exports.bookInfoController = async(req, res, next) => {
     let book = await Book.find({});
     res.render('/pages/book-infomation/index', {

     });
 }
 module.exports.checkBookPrice = async(req, res, next) => {
     let bookId = req.query.bookId;
     try {
         let book = await Book.findById(bookId);
         res.send(book.toJSON());
     } catch (err) {
         res.send("wrongid");
     }

 }