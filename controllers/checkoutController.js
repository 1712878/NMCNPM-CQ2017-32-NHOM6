var Book = require('../models/book');
var GiaoDich = require('../models/giaodich')
module.exports.checkout = async(req, res, next) => {
    if (await Book.exists({ bookid: req.body.bookid })) {
        var b = await Book.findOne({ bookid: req.body.bookid });
        if (b.quantity < req.body.quantity) res.render('pages/checkout/index', { pageTitle: 'Not enough quantity' });
        else {
            var newQuantity = b.quantity - req.body.quantity;
            await Book.findByIdAndUpdate(b.id, { quantity: newQuantity });
        }
        var cost = b.cost * req.body.quantity;
        var gd = new GiaoDich({
            bookId: req.body.bookid,
            quantity: req.body.quantity,
            total: cost
        });
        await gd.save();
        res.render('pages/checkout/index', { pageTitle: 'Success' });
    } else {
        res.render('pages/checkout/index', { pageTitle: 'Failed' });
    }
}