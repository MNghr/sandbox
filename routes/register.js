let express = require('express');
let router = express.Router();
let moment = require('moment');
let connection = require('../mysqlConnection');

router.get('/', function (req, res, next) {
    res.render('register', {
        title: 'sign up'
    });
});

router.post('/', function (req, res, next) {
    let userName = req.body.user_name;
    let email = req.body.email;
    let password = req.body.password;
    let createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    let query = 'INSERT INTO users (user_name,email,password,created_at) VALUES ("' + userName + '", "' + email + '", "' + password + '" , "' + createdAt + '")';
    console.log(query);
    connection.query(query, function (err, rows) {
        res.redirect('/login');
    });
});

module.exports = router;