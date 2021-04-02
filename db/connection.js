const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:'127.0.0.1',
    username:'root',
    password:'5jkhxtu2',
    database:'employeemanagement'
});


connection.query = util.promisify(connection.query);

module.exports = connection;




