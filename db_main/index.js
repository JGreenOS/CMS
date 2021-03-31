const connection = require('./connections');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

//add department
addDepartment(department) {
   return this.connection.query("INSERT INTO department SET ?", department); 
}



//add role



//add employee



//update managers


//view employee by manager


//delete department


//delete role


//delete employees


//view total salary budget for a specific department



}
module.exports = new DB (connection);