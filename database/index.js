const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  username: String,
  repoName: String,
  url: String,
  stargazers: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (dataObj) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  //Set the data object with accurate info
  let data = {
    id: dataObj.id,
    username: dataObj.owner.login,
    repoName: dataObj.name,
    url: dataObj.html_url,
    stargazers: dataObj.stargazers_count,
  };

  //create a new instance of the data with the passd in object
  let doc = new Repo(data)

  //save to DB
  return doc.save();
}

let getTop25 = () => {
  //this code below clears your DB.
  // Repo.remove({}, (err, results) => {console.log('deleted documents')});

  //returns a 'promise' of the sorted array of objects..
  return Repo.find().sort({stargazers: 'desc'}).limit(25);
}

module.exports = { save, getTop25 };