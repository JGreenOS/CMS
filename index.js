require('dotenv').config('./.env');
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const { load } = require('dotenv');
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
                    name: "Change employee role",
                    value: "CHANGE_EMP_ROLE"
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
        return findEmpByManager();
        case "ADD_DEPT":
        return newDepartment();
        case "ADD_ROLE":
        return newRole();
        case "ADD_EMPLOYEE":
        return addEmployee();
        case "CHANGE_EMP_ROLE":
        return updateEmpRole();
        // case "DELETE_DEPT":
        // return deleteDepartment();
        // case "DELETE_ROLES":
        // return deleterole();
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
console.log('\n');
console.table(departments)

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
async function findEmpByManager(){
    const managers = await db.findAllEmployees();

    const managerChoices = managers.map(({ empid, firstname, lastname }) => ({
        name: `${firstname} ${lastname}`,
        value: empid,
    }));

    const { managerId } = await prompt ([
        {
        type: "list",
        name: "managerId",
        message: "Which manager do you want to see the list of employees?",
        choices: managerChoices
        }
    ]);
    const employees = await db.findEmpByManager(managerId);
   
    if (employees.length === 0) {
        console.log("The selected employee is not assigned as a manager");
    }
            else {
                console.table(employees);
            }
            loadMenu();
        }

//View Employees by Department

async function findByDept(){
    const departments = await db.findAllDepts();

const deptChoices = departments.map(({ deptid, deptname}) => ({
    name: `${deptname}`,
    value: deptid
}));

const { deptid } = await prompt ([
    {
        type:"number",
        name: "deptid",
        message: "Select the department number to filter",
        choices: deptChoices
    }
]);
const employees = await db.findEmpbyDept(deptid);
console.log("\n");
console.table(employees);

loadMenu();
}


//***
//Update employee role
async function updateEmpRole() {
    const employees = await db.findAllEmployees();

    const employeeChoices = employees.map(({ empid, firstname, lastname }) => ({
        name: `${firstname} ${lastname}`,
        value: empid
    }));

    const {empid} = await prompt ([
        {
            type:"list",
            name: "empid",
            message: "Select the employee to update their role",
            choices: employeeChoices
        }
    ]);

    const roles = await db.findAllRoles();
    const roleChoices = roles.map(({ roleid, roletitle }) => ({
        name: roletitle,
        value: roleid
    }));

    const {emp_roleid} = await prompt ([
        {
            type:"list",
            name:"emp_roleid",
            message: "Select the role to assign to this employee",
            choices: roleChoices
        }
    ]);
    
    await db.updateEmpRole(empid, emp_roleid);

    console.log("Updated employee role");

    loadMenu();
}
    
//***********
//Update Employee Manager
 
 
//********************
 //Delete Department
// async function deleteDepartment() {
//     const departmentList = await db.findAllDepts();
//     const deptChoices = departmentList.map(({ deptid, deptname }) => ({
//         name: deptname,
//         value: deptid,
//     }));
    
// const {deptid} = await prompt ([
//         { 
//             type: "number",
//             name: "deptid",
//             message: "Which department would you like to delete WARNING - this will remove roles and employees!",
//             choices: deptChoices
//         },
// ],)          
// await db.delDepartment1(deptid);

//        console.log(`Removed department from the system`);
//        console.log("deletd dept with id:" + deptid);
//        loadMenu();
//     }

 
 //************
 //Delete Roles

//  async function deleterole(){
//      const role = await db.findAllRoles();
//      const roleList = role.map(({ roleid, roletitle}) => ({
//          name: roletitle,
//          value: roleid,
//      }));

//      const {roleid} = await prompt ([
//          {
//              type: "number",
//              name: "roleid",
//              message: "Select the role id to delete",
//              choices: roleList
//          },
//         ],
//      )
// console.log("rolenumber", roleid);
// await db.delRole(roleid),

// loadMenu();
//     }
 //***********
 //Delete Employees
async function deleteEmployee() {
const employee = await db.findAllEmployees();
const employeeList = employee.map(({ empid, firstname, lastname }) => ({
    name: `${empid} ${firstname}  ${lastname} `,
    value: `${empid}`, 
}));

const {empid} = await prompt ([
    {
        type:"number",
        name: "empid",
        message: "Select the employee number to delete",
        choices: employeeList
    },
],
)
console.log("employeenumber", empid);
await db.delEmployee(empid),


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
 };
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