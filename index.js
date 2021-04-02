const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require ("console.table");

init ();

function init() {
const logoText = logo ( { name: "Employee Management System"}).render();
console.log(logoText);

loadMenu();
}

//inquirer package
async function loadMenu () {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            messsage: "Select an action",
            choices: [
               {
                   name: "View All Departments",
                   value: "VIEW_DEPTS"
               },
               {
                   name: "View All Roles",
                   value: "VIEW_ROLES"
               },
               {
                   name: "View All Employees",
                   value: "VIEW_ALL_EMP"
               }, 
               {
                   name: "View Employees by Department",
                   value: "VIEW_EMP_DEPTS"
               },
               {
                   name: "View Employees by Manager",
                   value: "VIEW_EMP_MANAGER"
               },
                {
                    name: "Add Department",
                    value: "ADD_DEPT"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                }, 
                {
                    name: "Delete Department",
                    value: "DELETE_DEPT"
                },
                {
                    name: "Delete Roles - be careful this can make a mess",
                    value: "DELETE_ROLES"
                },
                {
                    name: "Delete Employee",
                    value: "DELETE_EMPLOYEE"
            },
        
            {
                name: "Exit system",
                value: "EXIT"
            },
            ]
        }
    ]);

    //wire function to the choice
   switch (choice) {
       case "VIEW_DEPTS":
        return findAllDepts();
        case "VIEW_ROLES":
        return findAllRoles();
        case "VIEW_ALL_EMP":
        return viewEmployees();
        case "VIEW_EMP_DEPTS":
        return findByDept();
        case "VIEW_EMP_MANAGER":
        return ;
        case "ADD_DEPT":
        return newDepartment();
        case "ADD_ROLE":
        return newRole();
        case "ADD_EMPLOYEE":
        return addEmployee();
        case "DELETE_DEPT":
        return deleteDepartment();
        case "DELETE_ROLES":
        return;
        case "DELETE_EMPLOYEE":
        return deleteEmployee();
        default:
            return goodbye();
   }       
    };
                          
//****
//View All Departments
async function findAllDepts () {
const departments = await db.findAllDepts();

const deptChoices = departments.map(({ deptid, deptname }) => ({
    name: deptname,
    value: deptid
}));

const { departmentId } = await prompt ([
    { 
        type: "list",
        name: "departmentId",
        message: "Which department would you like to view?",
        choices: deptChoices
        }]);

        const employees = await db.findAllEmployees(departmentId);

        console.log ("\n");
        console.table(employees);

        loadMenu();

}

//View All Roles
async function findAllRoles () {
    const roles = await db.findAllRoles();
    console.log("\n");
    console.table(roles);

    loadMenu();
}
//View All Employees
async function viewEmployees() {
    const employees = await db.findAllEmployees();
    console.log("\n");
    console.table(employees);

    loadMenu();
}
//View Employees by Manager

//View Employees by Department


//***
//Update employee role

//***********
//Update Employee Manager
 
 
//********************
 //Delete Department
async function deleteDepartment() {
    const departmentList = await db.findAllDepts();
    const deptChoices = departmentList.map(({ deptid, deptname }) => ({
        name: deptname,
        value: deptid
    }));
    
const { deptid } = await prompt (
        { 
            type: "list",
            name: "deptname",
            value: "deptid",
            message: "Which department would you like to delete WARNING - this will remove roles and employees!",
            choices: deptChoices
            });
        
await db.delDepartment1(deptid);

       console.log(`Removed department from the system`);
       console.log("deletd dept with id:" + deptid);
       loadMenu();
    }

 
 //************
 //Delete Roles

 //***********
 //Delete Employees
async function deleteEmployee() {
const employee = await db.findAllEmployees();
const employeeList = employee.map(({ empid, firstname, lastname }) => ({
    name: `${firstname}  ${lastname} `,
    value: empid, 
}));

const { employeeId } = await prompt ([
    {
        type: "list",
        name: "empid",
        message: "Select the employee to delete",
        choices: employeeList
    }
]);

 await db.delEmployee(employeeId);
 console.log(`Removed employee from the system`);

loadMenu();
}
//**************
//Add Department
async function newDepartment(){
const department = await prompt ([
    { name: "deptname",
    message: "Enter the name of the new department"
 }
]);
await db.newDepartment(department);

console.log(`Added ${department.deptname} to the system`);

loadMenu();
 }
//***********************
//Add Role
async function newRole(){
const departments = await db.findAllDepts();

const deptChoices = departments.map(({ deptid, deptname }) => ({
    name: deptname,
    value: deptid
}));

    const role = await prompt ([
        { name: "roletitle",
        message: "Enter the title of the new role"
    },
    { name: "rolesalary",
    message: "Enter the salary for this role"
},
{
    type: "list",
    name: "dept_id",
    message: "Select the department for this role",
    choices: deptChoices

        }
    ]);
    await db.newRole(role);
    console.log(`Added ${role.roletitle} to the system`);

    loadMenu();
}
//*******************************            
//Add Employee 
//needs to return roles and all employees
//prompt for first name, last name

//then in roles, prompt for role

//then add manager id

//confirmation statement

async function addEmployee() {
    const roles = await db.findAllRoles();
    const employees = await db.findAllEmployees();

    const employee = await prompt ([
        {
            name: "firstname",
            message: "Enter the new employee's first name"
        },
        { name: "lastname",
        message: "Enter the new employee's last name"
    },
    ]);

    const roleChoices = roles.map(({ roleid, roletitle }) => ({
        name: roletitle,
        value: roleid,
    }));
    const {roleid } = await prompt ({
        type: "list",
        name: "roleid",
        message: "Select the new employee's role",
        choices: roleChoices
    });
    employee.emp_roleid = roleid;

    const managerList = employees.map (({ empid, firstname, lastname }) => ({
        name: `${firstname} ${lastname}`,
        value: empid
    }));
    managerList.unshift({name: "None", value: null });

    const { managerid } = await prompt ({
        type: "list",
        name: "managerid", 
        message: "Select the name of the employee's manager",
        choices: managerList
    });

    employee.managerid = managerid;

    await db.newEmployee(employee);

    console.log(
        `Added ${employee.firstname} ${employee.lastname} to the system`);

        loadMenu();
    }

function goodbye() {
    console.log("Exited system. You may close this window");
    process.exit(goodbye);
}