//npm i mysql => require('mysql')
//npm i mysql2 => require('mysql2') 
//npm i mysql8.0 => require('mysql8.0')

const mysql = require('mysql8.0');

//config Property
let options = {
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'testing'
};

//create Connection
let con = mysql.createConnection(options);

//connect
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Query
con.query('SELECT * FROM EMPLOYEE', function (error, results, fields) {
  if (error) throw error;
  //print Table Format
  console.table(results);
  
  //Print first Row
  // console.log('The solution is: ', results[0]);

  //print Name Value
  // console.log('The solution is: ', results[0].Name);
});

//Close Connection
con.end();






