/*schema file with 3 basic tables; foreign keys to connect the department id to the role and another foreign key to connect the employee table and another foreign key to connect employee id to manager id */

USE sbzk0qvf8zny0h2d;

CREATE TABLE department (
    deptid INT AUTO_INCREMENT PRIMARY KEY,
    deptname VARCHAR(30) NOT NULL
);
CREATE TABLE role (
    roleid INT AUTO_INCREMENT PRIMARY KEY,
    roletitle VARCHAR(60) UNIQUE NOT NULL,
    rolesalary DECIMAL NOT NULL,
    dept_id INT NOT NULL,
    INDEX dep_index (dept_id),
    FOREIGN KEY (dept_id)
        REFERENCES department(deptid)
        ON DELETE CASCADE
);
    
CREATE TABLE employee (
    empid INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    emp_roleid INT NOT NULL,
    INDEX role_index (emp_roleid),
    FOREIGN KEY (emp_roleid) references role (roleid),
    managerid INT,
    INDEX man_ind (managerid),
    FOREIGN KEY (managerid)
        REFERENCES employee (empid)
        ON DELETE SET NULL

);


INSERT INTO department (deptname) VALUES 
("StuApps"),
("BusApps"),
("NOC"),
("DevOps"),
("HelpDesk");

INSERT INTO role (roletitle, rolesalary, dept_id) VALUES

("Manager 1",120000,1),
("Senior Analyst 1",110000,1),
("Developer 1",75000,4),
("Technician 1", 25000, 5),
("Support Specialist 1",50000,1),
("System Admin 1",80000,1),
("Manager 2",120000,2),
("Manager 3",120000,3),
("Manager 4",120000,4),
("Manager 5",120000,5),
("Senior Analyst 2",110000,2),
("Senior Analyst 3",110000,3),
("Support Specialist 3",50000,3),
("Support Specialist 5",50000,5),
("System Admin 2",80000,2),
("System Admin 3",80000,3),
("System Admin 4",80000,4),
("Technician 5",25000,5),
("Technician 2",25000,5),
("Receptionist",20000,5),
("Developer 2",75000,2);


INSERT INTO employee (empid, firstname, lastname, emp_roleid, managerid) VALUES
(23,"Donald","Duck",7,null),
(27,"Fred","Flintstone",8,null),
(28,"Wonder","Woman",9,null),
(29,"Hermione","Granger",10,null),
(20,"Bugs","Bunny",1,null),
(21,"Mickey","Mouse",11,20),
(22,"Daffy","Duck",13,23),
(24,"Homer","Simpson",12,27),
(25,"Bart","Simpson",3,27),
(26,"Charlie","Brown",18,28),
(30,"Leia","Skywalker",17,28),
(31,"Sarah","Connor",20,28),
(32,"Clarice","Starling",16,23),
(33,"Kara","Thrace",5,20),
(34,"Elasti","Girl",21,28),
(35,"Elizabeth","Swann",6,20),
(36,"Iam","Batman",4,28),
(37,"Iron","Man",19,23),
(38,"Captain","America",15,23),
(39,"Captain","Marvel",2,27),
(40,"Darth","Vader",14,27);
