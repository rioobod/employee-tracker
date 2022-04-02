const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: '',
      password: '',
      database: 'employee_tracker'
      // user: process.env.DB_USER,
      // password: process.env.DB_PW,
      // database: process.env.DB_NAME
    },
    console.log('Connected to the Employee Tracker database.')
  );


  module.exports = db;
