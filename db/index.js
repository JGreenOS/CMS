// const connection = require('./connection.js');

const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:'127.0.0.1',
    username:'root',
    password:'5jkhxtu2',
    database:'employeemanagement'
});


//connection.query = util.promisify(connection.query);


// class DB { 
//     constructor(connection) {
//    this.connection = connection;

//find all departments
// findAllDepts() {
//     return this.connection.query(`SELECT * FROM department`);
// }

//add department
newDepartment (department) {
    return this.connection.query('INSERT INTO department SET ?', department);
}

//remove department
delDepartment (deptid) 
 return this.connection.query("DELETE FROM department WHERE deptid = ?", deptid)


//add role
newRole(role) 
    return this.connection.query("INSERT INTO role set ?", role);

//add employee
newEmployee(employee) 
return this.connection.query("INSERT INTO employee SET ?", employee);

//remove employee and use id!
delEmployee(empid) {
 return this.connection.query("DELETE FROM employee WHERE empid = ?", empid);

}

//update managers


//view employee by manager


//delete department


//delete role


//delete employees


//view total salary budget for a specific department


//keeps connection open!

// module.exports = new DB(connection)