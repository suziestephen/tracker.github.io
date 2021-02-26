/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/


CREATE DATABASE employees;
USE employees;


CREATE TABLE department (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)

);

CREATE TABLE role (
id INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL(10,2),
department_id INT NOT NULL,
PRIMARY KEY (id)


);

CREATE TABLE employee (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER DEFAULT NULL,
PRIMARY KEY (id)


);

SELECT * FROM department


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