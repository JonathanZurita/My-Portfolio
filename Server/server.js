const express = require('express')
const cors = require('cors');

const path = require('path');
const query = require('../Database/query.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static(path.join(__dirname, './Client/dist')));


app.get(`/project`, (req, res) => {
  query.getProjects((err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.sendStatus(404);

    } else {
      res.status(200).send(results);
    }
  })
});

app.get(`/photos`, (req, res) => {
  query.getPhotos((err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.sendStatus(404);

    } else {
      res.status(200).send(results);
    }
  })
});

app.listen(PORT, () => {
  console.log(`connected to port: ${PORT}`);
});