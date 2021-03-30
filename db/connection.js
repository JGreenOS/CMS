const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    username: "DevJulia",
    password: "s1p2a3r4k5y6**g00b3r$",
    database: "employeemanagement"
});

connection.connect(
    console.log(`connected as id ${connection.threadId}\n`)
);

connection.query = util.promisify(connection.query);

module.exports = connection;




