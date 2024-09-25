const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'booking_system'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
