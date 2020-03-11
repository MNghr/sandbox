var express = require('express');
var router = express.Router();
let moment = require("moment");
let connection = require("../mysqlConnection");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
