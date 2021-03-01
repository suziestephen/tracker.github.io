const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'FASTfare4',
    database: 'employees',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    start();
  });

  function start() {
    inquirer
      .prompt({
        type: 'list',
        name: 'selection',
        message: 'Please select an option',
        choices: [
          'Add Department',
          'Add Role',
          'Add Employee',
          'View Department',
          'View Role',
          'View Employee',
          'Update Employee Role',
          'Exit'
        ]
      })
  
      .then(function(result) {
        console.log('You have selected: ' + result.selection);
        switch (result.selection) {
          case 'Add Department':
            addDepartment();
            break;
          case 'Add Role':
            addRole();
            break;
          case 'Add Employee':
            addEmployee();
            break;
          case 'View Department':
            viewDepartment();
            break;
          case 'View Role':
            viewRole();
            break;
          case 'View Employee':
            viewEmployee();
            break;
          case 'Update Employee Role':
            updateRole();
            break;
          case 'Exit':
            connection.end();
            break;
        }
      });
  }
  
  function addDepartment() {
    inquirer
      .prompt({
        type: 'input',
        message: 'Please type the name of the department you are adding',
        name: 'department'
      })
      .then(function(res) {
        const department = res.department;
        const query = `INSERT INTO department (name) VALUES('${department}')`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.table(res);
          start();
        });
      });
  }
  
  function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Please type the name of the job title you are adding?',
          name: 'title'
        },
        {
          type: 'input',
          message: 'Please type the salary for this role',
          name: 'salary'
        },
        {
          type: 'input',
          message: 'Please type the Department ID for this role',
          name: 'departmentID'
        }
      ])
      .then(function(res) {
        const title = res.title;
        const salary = res.salary;
        const departmentID = res.departmentID;
        const query = `INSERT INTO role (title, salary, department_id) VALUE('${title}', '${salary}', '${departmentID}')`;
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        });
      });
  }
  
  function addEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Please type the employee first name',
          name: 'firstName'
        },
        {
          type: 'input',
          message: 'Please type the employee last name',
          name: 'lastName'
        },
        {
          type: 'input',
          message: 'Please type the employee role ID',
          name: 'roleID'
        },
        {
          type: 'input',
          message: 'Please type the employee manager ID',
          name: 'managerID'
        }
      ])
      .then(function(res) {
        const firstName = res.firstName;
        const lastName = res.lastName;
        const roleID = res.roleID;
        const managerID = res.managerID;
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE('${firstName}', '${lastName}', '${roleID}', '${managerID}')`;
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        });
      });
  }
  
  function viewDepartment() {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  function viewRole() {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  function viewEmployee() {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }

  function updateRole() {
    const query = 'SELECT id, first_name, last_name, role_id  FROM employee';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      {
        inquirer.prompt([
          {
          type: 'input',
          message: 'Please select the employee to be updated (using the number from id column only)',
          name: 'employee'
          },

          {
          type: "input",
          message: "What do you want to update to?",
          name: "updateRole"
          }
        ])

        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.eeUpdate],function(err, res) {
          if (err) throw err;
          console.table(res);
          startScreen();
        });
      }
    });
  }

  