var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;
var UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        default: "no_id"
    },
    password: {
        type: String,
        default: "0"
    },
});
const model = mongoose.model('user', UsersSchema, 'user');
module.exports.model = model;
module.exports.checkIfExists = async(usr) => {
    try {
        let user = await model.findOne({ username: usr });
        if (user) return true;
    } catch (err) {
        return false;
    }
    return false;
}
module.exports.createNewUser = async(username, password) => {
    bcrypt.hash(password, saltRounds, async(err, hash) => {
        try {
            await model.create({
                username: username,
                password: hash
            });
            return true;
        } catch (err) {
            return false;
        }
    });
};