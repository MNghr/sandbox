var express = require('express');
var router = express.Router();
let moment = require("moment");
let connection = require("../mysqlConnection");
/* GET home page. */
router.get('/', function(req, res, next) {
  let query = 'SELECT *,DATE_FORMAT(created_at, \'%Y年%m月%d日 %k時%i分%s秒\') AS created_at FROM boards';
  connection.query(query, function (err, rows) {
    console.log(rows);
    res.render('index', {
      title: '掲示板っぽいやつ',
      boardList: rows
    });
  });
  //res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  let title = req.body.title;
  let createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  let query = 'INSERT INTO boards (title,created_at) VALUES ("' + title + '",' + '"' + createdAt + '")';
  connection.query(query, function (err, rows) {
    res.redirect('/');
  });
});

module.exports = router;
