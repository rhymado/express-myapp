const mysql = require ('mysql');

const connect = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myapp',
});

connect.connect (function (err) {
  if (err) throw err;
});

module.exports = connect;
