const db = require("./db_main");


//inquirer package
//add department
async function addDepartment() {
    const department = await prompt([
        {
            name: "name",
            message: "Enter the full name of the new department"
        }
    ]);

    await db.addDepartment(department);
    console.log(`Added ${department.deptname} to the database`);



//add roles
//add employees
//update employee managers
//view employees by manager
//delete department
//delete role
//delete employee 


//what to do based on choices (switch statements)
}
