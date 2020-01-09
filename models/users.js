var mongoose = require('mongoose');
var UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        default: "no_id"
    },
    password: {
        type: String,
        default: "0"
    }

});
 module.exports= mongoose.model('user', UsersSchema, 'user');
