
USE employeemanagement;

INSERT INTO department (deptname) VALUES 
("StuApps"),
("BusApps"),
("NOC"),
("DevOps"),
("HelpDesk");

INSERT INTO role (roletitle, rolesalary, dept_roleid) VALUES
("Developer",75000,4),
("Manager 1",120000,1),
("Senior Analyst 1",110000,1),
("Support Specialist",50000,1),
("System Admin",80000,1),
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


INSERT INTO employee VALUES
(23,"Donald","Duck",1,null),
(27,"Fred","Flintstone",1,null),
(28,"Wonder","Woman",1,null),
(29,"Hermione","Granger",1,null),
(20,"Bugs","Bunny",1,null),
(21,"Mickey","Mouse",2,20),
(22,"Daffy","Duck",2,23),
(24,"Homer","Simpson",2,27),
(25,"Bart","Simpson",3,27),
(26,"Charlie","Brown",2,28),
(30,"Leia","Skywalker",3,28),
(31,"Sarah","Connor",3,28),
(32,"Clarice","Starling",5,23),
(33,"Kara","Thrace",5,20),
(34,"Elasti","Girl",6,28),
(35,"Elizabeth","Swann",6,20),
(36,"Iam","Batman",4,28),
(37,"Iron","Man",4,23),
(38,"Captain","America",4,23),
(39,"Captain","Marvel",2,27),
(40,"Darth","Vader",4,27);

