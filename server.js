const db = require('./db/connection');
const cTable = require('console.table');
const inquirer = require('inquirer');

// inquirer code starts
//console.clear;

const quitData = () => {
  db.end();
  console.clear();
  console.log('Exited Employee Tracker');
  return false;
}

const viewAllDepartments = () => {
  const viewAllDept = `SELECT * FROM department`
  db.query(viewAllDept, (err, result) => {
    if (err) {
      console.log(`There was an error  ${err}`);
      return;
    }
    console.table(result);
    console.log(`
    `);
    promptData();

  });
}

const viewAllRoles = () => {
  // const viewAllRoles = `SELECT * FROM roles`//
  const viewAllRoles = `SELECT roles.id, roles.title, roles.salary, department.dept_name FROM roles LEFT JOIN department ON roles.department_id = department.id`
  db.query(viewAllRoles, (err, result) => {
    if (err) {
      console.log(`There was an error  ${err}`);
      return;
    }
    console.table(result);
    console.log(`
    `);
    promptData();
  });
}

const viewAllEmployees = () => {
  const viewAllEmployees = `SELECT * FROM employee`
  db.query(viewAllEmployees, (err, result) => {
    if (err) {
      console.log(`There was an error  ${err}`);
      return;
    }
    console.table(result);
    console.log(`
    `);
    promptData();
  });
}

const promptData = () => {
// function promptData() {
  inquirer.prompt([{
      type: 'list',
      name: 'menuOptions',
      message: 'what would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add A Department',
        'Add A Role',
        'Add An Employee',
        'Update an employee role',
        'Quit'
      ],
      loop: false
    },
  ]).then((choice) => {
    if (choice.menuOptions === 'Quit') {
      quitData();
    };
    if (choice.menuOptions === 'View All Departments') {
      viewAllDepartments();
    }
    if (choice.menuOptions === 'View All Roles') {
      viewAllRoles();
    }
    if (choice.menuOptions === 'View All Employees') {
      viewAllEmployees();
    }
  })
}

promptData();