USE employees;



INSERT INTO department
    (name)
VALUES
    ("Administration"),
    ("Management"),
    ("Development"),
    ("Support"),
    ("Sales");


INSERT INTO role
    (title, salary, department_id)
VALUES
("receptionist", 58500, 1),
("manager", 210000, 2),
("developer", 150000, 3),
("customer service", 60500, 4),
("sales person", 70650, 5);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
("Lorna", "Fink", 1, 2),
("Suzie", "Connellan", 1, NULL),
("Jordan", "Babai", 3, 2),
("Darren", "Sidwell", 5, 2);