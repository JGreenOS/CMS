
class DB { 
   constructor(connection) {
   this.connection = connection;
   }
//find all departments
findAllDepts() {
return this.connection.query("SELECT deptid, deptname FROM department");
}
//find all employees with salary
findAllEmployees() {
return this.connection.query("SELECT employee.empid, employee.firstname, employee.lastname, role.roletitle, department.deptname AS department, role.rolesalary FROM employee LEFT JOIN role on employee.emp_roleid = role.roleid LEFT JOIN department on role.dept_id = deptid");
}
//find all roles
findAllRoles() {
    return this.connection.query(`SELECT * FROM role`);
}

//add department
newDepartment (department) {
    return this.connection.query('INSERT INTO department SET ?', department);
}

//remove department
delDepartment1(deptid)  {
 return this.connection.query("DELETE FROM `department` WHERE `deptid` = '?'", deptid);

}
//add role
newRole(role) {
    return this.connection.query("INSERT INTO role set ?", role);
}
//add employee
newEmployee(employee) {
return this.connection.query("INSERT INTO employee SET ?", employee);
}

//remove employee and use id!
delEmployee(empid) {
 return this.connection.query("DELETE FROM `employee` WHERE `empid` = '?'", empid);

}

//update employee role
updateEmpRole(empid, emp_roleid){
return this.connection.query("UPDATE `employee` SET `emp_roleid` = '?'", [empid, emp_roleid]
);
}


//view employee by manager
findEmpByManager(managerid) {
    return this.connection.query("SELECT employee.empid, employee.firstname, employee.lastname, department.deptname AS department, role.roletitle FROM employee LEFT JOIN role on role.roleid = employee.emp_roleid LEFT JOIN department on deptid = role.dept_id WHERE managerid = '?'", managerid);
}


//delete role
delRole(roleid) {
    return this.connection.query("DELETE FROM `role` WHERE `roleid` = '?'", roleid);
}

//delete employees


//view total salary budget for a specific department
findEmpbyDept(deptid)
{
    return this.connection.query("SELECT employee.empid, employee.firstname, employee.lastname, department.deptname, department.deptid, role.roletitle FROM employee LEFT JOIN role on employee.emp_roleid = roleid LEFT JOIN department on role.dept_id = department.deptid WHERE deptid = '?'", deptid);
}

}
module.exports = new DB(require('./connection'))
