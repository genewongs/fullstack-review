const express = require('express');
const { getReposByUsername } = require('../helpers/github.js');
const { save, getTop25 } = require('../database');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let data = req.body;
  getReposByUsername(data.username)
    .then(res => Promise.all(res.data.map(repo => save(repo))))
    .then(data => res.sendStatus(201))
    .catch(err => console.log);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  getTop25()
    .then(results => {
      res.send(results);
    })
    .catch(err => console.log)
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

