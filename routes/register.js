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
    let emailExistsQuery = 'SELECT * FROM users WHERE email = "' + email + '"LIMIT 1';
    let registerQuery = 'INSERT INTO users (user_name,email,password,created_at) VALUES ("' + userName + '", "' + email + '", "' + password + '" , "' + createdAt + '")';
    console.log(query);
    connection.query(emailExistsQuery, function (err, email) {
        let emailExists = email.length;
        if (emialExists) {
            res.render('register', {
                title: "sign up",
                emialExists: "そのemailアドレスは既に使われています"
            });
        }else{
            connection.query(registerQuery, function (err, rows) {
                res.redirect('/login');
            });
        }
    });
});

module.exports = router;