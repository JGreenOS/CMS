
const util = require('util');
const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "DevJulia",
    password: "5jkhxtu2",
    database: "employeemanagement"
});

connection.connect(
    console.log(`connected as id ${connection.threadId}\n`));

connection.query = util.promisify(connection.query);

module.exports = connection;

