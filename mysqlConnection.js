let mysql = require("mysql");
let dbConfig = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "bulletin_board"
}

let connection = mysql.createConnection(dbConfig);

module.exports = connection;