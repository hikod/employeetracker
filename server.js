
const db = require('./db/connection');
const fs = require('fs');
const inquirer = require('inquirer');
const cTable = require('console.table');


//Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  //drop database and re-create

});

function init() {
  inquirer
    .prompt({
      name: 'option',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    })
    .then((answer) => {
      if (answer.option === 'view all departments') {
        const sql = 'select * from employee_db.department;';
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(' Viewing all departments');
            console.table(result);
            init();
          }
        });
      }
      if (answer.option === 'view all roles') {
        const sql = 'select role.title, role.id,department.name as dept_name, role.salary from employee_db.role left join employee_db.department on department.id= role.department_id;';
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(' Viewing all roles');
            console.table(result);
            init();
          }
        })
      }
      if (answer.option === 'view all employees') {
        const sql = 'select employee.id,employee.first_name, employee.last_name, role.title,department.name as department ,role.salary, employee.manager_id as manager from employee_db.employee join employee_db.role on employee.role_id = role.id join employee_db.department on role.department_id = department.id ;';
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(' Viewing all employees');
            console.table(result);
            init();
          }
        })
      }
      if (answer.option === 'add a department'){
        
        inquirer.prompt([
          {
              type: 'input',
              name: 'name',
              message: 'What is new department name?',
          },
      ]).then(answer => {
        console.log(answer.name);
        const sql = 'INSERT INTO employee_db.department (name) VALUES ("' + answer.name + '")';
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(' Adding a new department');
            db.query('select * from employee_db.department;', (err, result) => {
              if (err){
                console.log(err);
              } else 
              console.table(result);
            }
          );
            init();
          }
        })
      });
 
      }
      if (answer.option === 'add a role'){
        inquirer.prompt([
          {
              type: 'input',
              name: 'title',
              message: 'What is new role name?',
          },
          {
            type: 'input',
            name: 'salary',
            message: 'What is new role salary?',
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'What is the department for the new role?',
        },
        ]).then(answers => {
        console.log(answers);
        const sql = 'INSERT INTO employee_db.role (title, salary, department_id) VALUES ("' + answers.title + '","' + answers.salary + '",' + answers.department_id + ')';
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(' Adding a new role');
            
              db.query('select * from employee_db.role;', (err, result) => {
                if (err){
                  console.log(err);
                } else 
                console.table(result);
                init()
              }
            );
          }
        })
      });
      }
      if (answer.option === 'add an employee'){
        inquirer.prompt([
          {
              type: 'input',
              name: 'firstName',
              message: 'What is the new employee first name?',
          },
          {
            type: 'input',
            name: 'lastName',
            message: 'What is the new employee last name?',
        },
        {
          type: 'input',
          name: 'role',
          message: 'What is the role for the new employee?',
        },
        {
          type: 'input',
          name: 'manager',
          message: 'What will be the id of the manager?',
        }
        ]).then(answers => {
        console.log(answers);
        const manager_id = '';
        const sql = 'INSERT INTO employee_db.employee (first_name, last_name, role_id, manager_id) VALUES ("' + answers.firstName + '","' + answers.lastName + '",' + answers.role + ', ' + manager_id + ')';
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(' Adding an Employee');
            db.query('select * from employee_db.employee;', (err, result) => {
              if (err){
                console.log(err);
              } else 
              console.table(result);
              init();
            }
          );
          }
        })
      });
     
      }
      if (answer.option === 'update an employee role'){
        init();
      }
      
    });
}
// Function call to initialize app
init();