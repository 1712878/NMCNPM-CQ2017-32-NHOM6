var Book = require('../models/book');
var GiaoDich = require('../models/giaodich')
module.exports.checkout = async(req, res, next) => {
    if (await Book.exists({ bookid: req.body.bookid })) {
        let b = await Book.findOne({ bookid: req.body.bookid });
        if (b.quantity < req.body.quantity) {
            res.render('pages/checkout/index', { pageTitle: 'Thanh toán tại quầy', Notification: 'Thanh toán sản phẩm có ID:' + '"' + b.bookid + '"' + 'có tên sách là:' + '"' + b.name + '": ' + 'Không đủ số lượng' });
            return;
        } else {
            var newQuantity = b.quantity - req.body.quantity;
            await Book.findByIdAndUpdate(b.id, { quantity: newQuantity });
        }
        var cost = b.cost * req.body.quantity;
        let id=0;
        let orders=await GiaoDich.find({});
        if(orders)
            for(let i=0;i<(await orders).length;i++)
                 id=orders[i].id;
        let current_datetime = new Date()
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
        var gd = new GiaoDich({
            id:(id+1),
            bookId: req.body.bookid,
            quantity: req.body.quantity,
            total: cost,
            time: formatted_date,
            nameorder:req.body.nameorder,
            address:req.body.address
            
        });
        await gd.save();
        res.render('pages/checkout/index', { pageTitle: 'Thanh toán tại quầy', Notification: 'Thanh toán sản phẩm có ID:' + '"' + b.bookid + '"' + 'có tên sách là:' + '"' + b.name + '": ' + 'Thành công' });
    } else {
        res.render('pages/checkout/index', { pageTitle: 'Thanh toán tại quầy', Notification: 'Thanh toán thất bại:"Không có thông tin sách"' });
    }
}