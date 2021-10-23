const _ = require('lodash');
console.log(_.last([1,2,3]));

var number = 1 ;
var number_2 = 23 ;
var result = number + number_2 ;
console.log(result);

function print(){
    return "Hello World";
}
console.log(print());

 

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

