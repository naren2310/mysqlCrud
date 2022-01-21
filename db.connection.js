const mysql = require('mysql');


// database connection 

var db = mysql.createConnection({
    host: "localhost",
    user: "sammy",
    password: "SmartWork@123",
    database: "newdb"
  });
  
  db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });
  


  module.exports = db;