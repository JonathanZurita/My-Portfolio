const express = require('express')
const path = require('path');
const query = require('../Database/query.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static(path.join(__dirname, '../public/dist')));

app.get(`/project`, (req, res) => {
  var name = req.query.name;
  //console.log('req query:', req.query.name)
  
  query.getProjects(name, (err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.sendStatus(404);

    } else {
      res.status(200).send(results);
    }
  })
});

app.get('/search', (req, res) => {
  var search = req.query.search;
  query.getSearch(search, (err, results) => {
    if(err) {
        console.log('server error', err)
        res.sendStatus(404)
      } else {
        res.status(200).send(results);
      }
  })
});

app.get(`/photos`, (req, res) => {
  console.log('server photos get request')
  query.getPhotos((err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.sendStatus(404);

    } else {
      res.status(200).send(results);
    }
  })
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`connected to port: ${PORT}`);
});