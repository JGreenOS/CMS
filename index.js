const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const { exit } = require("node:process");
require ("console.table");

init ();

function init() {
const logoText = logo ( { name: "Employee Management System"}).render();
console.log(logoText);

loadMenu();
}

//inquirer package
function loadMenu () {
    const { choice } await prompt([
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
value: "VIEW_ALLEMPLOYEES"

},

                {

        
                    name: "Add Department",
                    value: "ADD_DEPT"
                },
                {
                    name: "Remove Department",
                    value: "DELETE_DEPT"

                },

                {
                    name: "Add Roles",
                    value: "ADD_ROLES"
                },

                {
                    name: "Delete Roles - be careful this can make a mess",
                    value: "DELETE_ROLES"
                },
                {
                name: "Add Employee",
                value: "ADD_EMPLOYEE"
                }, 
                {
                name: "Remove Employee",
                value: "DELETE_EMPLOYEE"
            },
            {
                name: ""
            }
            {
                name: "Update Employee Role",
                value: "UPDATE_ROLE"
            },
            {
                name: "Exit system",
                value: "EXIT"
            },

            //close out inquirer here







//add employees
//update employee managers
//view employees by manager
//delete department
//delete role
//delete employee 


//what to do based on choices (switch statements)

