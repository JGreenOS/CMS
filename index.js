
//add employees
//update employee managers
//view employees by manager
//delete department
//delete role
//delete employee 


//what to do based on choices (switch statements)

const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
//const db = require("./db");
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
}                            
    
    //close out main prompts, next build switch statements
//****
//View All Departments
//View All Roles
//View All Employees
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