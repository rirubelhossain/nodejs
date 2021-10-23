/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
  con.query("CREATE DATABASE mydb_node", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb_node"
});
 /*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers_updated (name, address,email) VALUES ('Rubel Hossain', 'Dhaka , Bangladesh','rubel@gmail.com')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
*/
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers_updated", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });