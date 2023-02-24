// run this in the terminal to create a test submission:
// curl -H "Content-Type: application/json" -X POST -d '{"username":"peterparker","password":"secret"}' http://localhost:3000/test
// ^ NOTE: we created a route (/test) as an endpoint below to submit this using a curl command denoted as a POST in JSON format on localhost 3000 at that endpoint

const express = require('express');
const app = express();
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db = low(adapter);

// init the data store
db.defaults({ users: [] }).write();

// data parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//return all users
app.get('/data', function(req,res) {
  res.send(db.get('users').value());
});

// post route
app.post('/test', function (req, res){
  console.log('Username: ',req.body.username, 'Password: ', req.body.password);
})

//start server
//------------------
app.listen(3000, function(){
  console.log('Running on port 3000!!!')
});
