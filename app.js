const mysql=require("mysql");
const con=mysql.createConnection({
 host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodeMSDB'
});
con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
  con.query('INSERT INTO users(user, age, name) VALUES ("saziran",42, "Yazd")', (err,insert) => {
    if(err) throw err;
    console.log('Data received from Db:');
    console.log(insert);
  });
  con.query('SELECT * FROM users', (err,rows) => {
    if(err) throw err;
    console.log('Data received from Db:');
    console.log(rows[1]);
  });