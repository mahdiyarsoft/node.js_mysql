const mysql=require("mysql");
const con=mysql.createConnection({
 host: 'db_host',
  user: 'db_user',
  password: 'db_pass',
  database: 'db_Name' 
});
con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
//   con.query('INSERT INTO users(user, age, name) VALUES ("mahdiyarsoft",17, "iran")', (err,insert) => {
//     if(err) throw err;
//     console.log('Data received from Db:');
//     console.log(insert);
//   });
//   con.query('SELECT * FROM users', (err,rows) => {
//     if(err) throw err;
//     console.log('Data received from Db:');
//     console.log(rows);
//   });
