var express = require('express');
var router = express.Router();
const User = require('../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.post('/signup', async(req, res, nest) => {
    if (req.body.username && req.body.password) {
        await
        User.createNewUser(req.body.username, req.body.password);
        res.send("success");
    }
});
module.exports = router;