const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || 'password123',
  database: process.env.RDS_DB || 'portfolio'
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

const getSearch = (search, cb) => {
  const queryString = `select * from project where info like "%${search}%" OR tech like "%${search}%" OR title like "%${search}%"`;
  connection.query(queryString, (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
};


module.exports = {
  getProjects,
  getPhotos,
  getSearch
}