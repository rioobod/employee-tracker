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
const addDepartment = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'deptName',
    message: 'What is the name of the new depertment?'
  }
])
.then((newDept) => {
  const addADept = `INSERT INTO department (dept_name) VALUES ('${newDept.deptName}');`
  db.query(addADept, (err, result) => {
    if (err) {
      console.log(`There was an error  ${err}`);
      return;
    }
    viewAllDepartments();
    // console.table(result);
    console.log(`
    `);
    promptData();
  });
})
}

const addRole = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'roleName',
    message: 'What is the title of the new role?'
  },
  {
    type: 'list',
    name: 'roleDept',
    message: 'What department does the role belong?',
    choices:[1, 2, 3, 4]
  },
  {
    type: 'input',
    name: 'roleSalary',
    message: 'What is the salary for the new role?'
  }
])
.then((newRole) => {
  const addARole = `INSERT INTO roles (title, department_id, salary) VALUES ('${newRole.roleName}', '${newRole.roleDept}', '${newRole.roleSalary}');`
  db.query(addARole, (err, result) => {
    if (err) {
      console.log(`There was an error  ${err}`);
      return;
    }
    viewAllRoles();
    // console.table(result);
    console.log(`
    `);
    promptData();
  });
})
}
const addEmployee = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'fName',
    message: 'What is the first name of the new employee?'
  },
  {
    type: 'input',
    name: 'lName',
    message: 'What is the last name of the new employee?'
  },
  {
    type: 'input',
    name: 'empRole',
    message: 'What is the role of the new employee?'
  }
])
.then((newEmp) => {
  const addAnEmployee = `INSERT INTO employee (first_name, last_name, role_id) VALUES ('${newEmp.fName}', '${newEmp.lName}', '${newEmp.empRole}');`
  db.query(addAnEmployee, (err, result) => {
    if (err) {
      console.log(`There was an error  ${err}`);
      return;
    }
    viewAllEmployees();
    // console.table(result);
    console.log(`
    `);
    promptData();
  });
})
}

// const updateEmployee = () => {
 // }

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
    if (choice.menuOptions === 'Add A Department') {
      addDepartment();
    }
    if (choice.menuOptions === 'Add A Role') {
      addRole();
    }
    if (choice.menuOptions === 'Add An Employee') {
      addEmployee();
    }
    // else if (choice.menuOptions === 'Update an employee role') {
    //   updateEmployee();
    // }

  })
}

promptData();