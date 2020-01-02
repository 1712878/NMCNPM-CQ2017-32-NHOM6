var Book = require('../models/book');
var GiaoDich = require('../models/giaodich')
module.exports.checkout = async(req, res, next) => {
    if (await Book.exists({ bookid: req.body.bookid })) {
        let b = await Book.findOne({ bookid: req.body.bookid });
        if (b.quantity < req.body.quantity) {
            res.render('pages/checkout/index', {pageTitle: 'Thanh toán tại quầy', Notifacation: 'Không đủ số lượng',product:b });
            return;
        } else {
            var newQuantity = b.quantity - req.body.quantity;
            await Book.findByIdAndUpdate(b.id, { quantity: newQuantity });
        }
        var cost = b.cost * req.body.quantity;
        var today = new Date();
        var gd = new GiaoDich({
            bookId: req.body.bookid,
            quantity: req.body.quantity,
            total: cost,
            time: today
        });
        await gd.save();
        res.render('pages/checkout/index', {pageTitle: 'Thanh toán tại quầy', Notifacation: 'Thành công' ,product:b});
    } else {
        res.render('pages/checkout/index', {pageTitle: 'Thanh toán tại quầy', Notifacation: 'Thất bại',product:'' });
    }
}