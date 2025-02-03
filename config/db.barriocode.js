const mysql = require('mysql2'); 

const barriocode = mysql.createConnection({
  host: process.env.DB_HOST,  
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_BARRIO_DB
});

module.exports = barriocode;