const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || 'password123',
  database: 'portfolio'
} );


connection.connect(err => {
  if(err) {
    console.log(`couldnt connect to database`, err)
  } else {
    console.log(`connected to mysql database`)
  }
});


const getProjects = (name, cb) => {
  
  var qryStr = '';

  if(name === undefined) {
    qryStr = 'select * from project';
  } else {
    qryStr = `select * from project where title =(?) `;
  }
  connection.query(qryStr, [name], (err, results) => {
    if(err) {
      console.log(err);
      cb(err, null);
    } else {
      //console.log(results);
      cb(null, results);
    }
  })
};

const getPhotos = (cb) => {

  connection.query('select * from photo', (err, results) => {
    if(err) {
      console.log(err);
      cb(err, null);
    } else {
      //console.log(results);
      cb(null, results);
    }
  })
};


module.exports = {
  getProjects,
  getPhotos
}