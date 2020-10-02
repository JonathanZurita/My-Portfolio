"use strict";

var express = require('express');

var path = require('path');

var query = require('./Database/query.js');

var PORT = process.env.PORT || 4000;
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"](path.join(__dirname, './Client/dist')));
app.get('/project', function (req, res) {
  var name = req.query.name; //console.log('req query:', req.query.name)

  query.getProjects(name, function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.sendStatus(404);
    } else {
      res.status(200).send(results);
    }
  });
});
app.get('/search', function (req, res) {
  var search = req.query.search;
  query.getSearch(search, function (err, results) {
    if (err) {
      console.log('server error', err);
      res.sendStatus(404);
    } else {
      res.status(200).send(results);
    }
  });
});
app.get('/photos', function (req, res) {
  console.log('server photos get request')
  query.getPhotos(function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.sendStatus(404);
    } else {
      res.status(200).send(results);
    }
  });
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './Client/dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(PORT, function () {
  console.log("connected to port: ".concat(PORT));
});
