let express = require('express');
let router = express.Router();
let connection = require('../mysqlConnection');

router.get('/', function (req, res, next) {
    if (req.session.user_id) {
        res.redirect('/');
    } else {
        res.render('login', {
            title: "ログイン"
        });
    }
});

router.post('/', function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let query = 'SELECT user_id FROM users WHERE email= "' + email + '" AND password ="' + password + '" LIMIT 1';
    console.log(query);
    connection.query(query, function (err, rows) {
        console.log(rows[0]);
        let userId = rows.length ? rows[0].user_id : false;
        console.log(userId)
        if (userId) {
            req.session.user_id = userId;
            res.redirect('/');
        } else {
            res.render('login', {
                title: 'ログイン',
                noUser: 'メールアドレスかパスワードが間違っています'
            });
        }
    });
});

module.exports=router;
