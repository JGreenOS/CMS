# CMS
Content Management System using MySQL
# Unit 12 MySQL Homework: Employee Tracker

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Instructions

Design the following database schema containing three tables:

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
Build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles


We can frame this challenge as follows:

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

How do you deliver this? Here are some guidelines:

## Tech Stack 
* MySQL
* Inquirer JS
* Console Table
* ASCII-Art

![Employee Tracker](https://drive.google.com/file/d/1aMl2sysPh_rDdUZl1pBkTOfdZzga0me1/view?usp=sharing)


## Minimum Requirements

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* The command-line application should allow users to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

## Bonus

* The command-line application should allow users to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Developer Notes
* Interesting items:
  * Encountered challenges with a local installation of MSSQL, conflicts with MySQL and MySQL Workbench bugs.  The workaround was to deploy a database to Heroku and connect to the remote database to complete this project.
  * Opportunities for future development:
    * Build additional error recovery and "Are you sure?" prompts.
    * Improve the visual layout of the menu to reduce data entry errors.
    * Include validation for selected fields.
    * Include additional permissions to delete roles, employees or departments.
    * Implement a robust search feature to avoid potential data duplication.





