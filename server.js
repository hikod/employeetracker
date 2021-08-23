
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
          }
        })
      }
     init();
    });
}
// Function call to initialize app
init();