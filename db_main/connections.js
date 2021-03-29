const db = require('db')
db.connect ({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
})

const util = require('util');
const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    //password: 
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;

