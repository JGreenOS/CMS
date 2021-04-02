require('dotenv').config();

const util = require("util");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DBNAME
});


connection.query = util.promisify(connection.query);

module.exports = connection;




