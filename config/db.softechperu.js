const mysql = require('mysql2'); 

const softechperu = mysql.createConnection({
  host: process.env.DB_HOST,  
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SOFTECH_DB
});

module.exports = softechperu;