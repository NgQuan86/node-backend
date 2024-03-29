require('dotenv').config();

const mysql = require('mysql2/promise'); // add promise => async await

//------creat a connection for each user------

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port : process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   });


// ------ creat a pool for all user's connection ------

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit:0

  });

  module.exports = connection;