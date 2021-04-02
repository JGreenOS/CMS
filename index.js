
//add employees
//update employee managers
//view employees by manager
//delete department
//delete role
//delete employee 


//what to do based on choices (switch statements)

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
           return ;
           case "ADD_ROLE":
           return ;
           case "ADD_EMPLOYEE":
           return ;
           case "DELETE_DEPTS":
           return ;
           case "DELETE_ROLES":
            return;
            case "DELETE_EMPLOYEE":
            return;
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
    console
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
 
 //************
 //Delete Roles

 //***********
 //Delete Employees



//**************
//Add Department




//***********************
//Add Role



//*******************************            
//Add Employee 
//needs to return roles and all employees
//prompt for first name, last name

//then in roles, prompt for role

//then add manager id

//confirmation statement




function goodbye() {
    console.log("Exited system. You may close this window");
    process.exit(goodbye);
}