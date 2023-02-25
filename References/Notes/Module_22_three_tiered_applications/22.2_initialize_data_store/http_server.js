// run this in the terminal to create a test submission:
// curl -H "Content-Type: application/json" -X POST -d '{"username":"peterparker","password":"secret"}' http://localhost:3000/test
// ^ NOTE: we created a route (/test) as an endpoint below to submit this using a curl command denoted as a POST in JSON format on localhost 3000 at that endpoint

const express = require('express');
const app = express();
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db = low(adapter);
const cors    = require('cors');

// init the data store
db.defaults({ users: [] }).write();

// serve static files from public directory
app.use(express.static('public'));

// allow cross-origin resource sharing (CORS)
app.use(cors());

// data parser - used to parse post data -> NOTE: needed to run this!!!
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // home page route to show user data
// app.get('/', function(req, res) {
//   db.get('users').value();
// })

//return all users
app.get('/data', function(req,res) {
  res.send(db.get('users').value());
});

// post route
app.post('/test', function (req, res){
  console.log(
    'Username: '  + req.body.username,
    ', Password: '  + req.body.password,
    ', Name: '      + req.body.name,
    ', Birth Date: '+ req.body.dob
  );
  res.send(
    'Username: '  + req.body.username,
    'Password: '  + req.body.password,
    'Name: '      + req.body.name,
    'Birth Date: '+ req.body.dob
  );
})

// add user, reminder req = request, res = response
app.post('/add', function (req,res) {
  var user = {
    'name'          : req.body.name,
    'dob'           : req.body.dob,
    'email'         : req.body.email,
    'username'      : req.body.username,
    'password'      : req.body.password,
    'phone'         : req.body.phone,
    'streetaddress' : req.body.streetaddress,
    'citystatezip'  : req.body.citystatezip,
    'latitude'      : req.body.latitude,
    'latitude'      : req.body.latitude,
    'longitude'     : req.body.longitude,
    'avatar'        : req.body.avatar
  };
  db.get('users').push(user).write();
  console.log(db.get('users').value());
  res.send(db.get('users').value);
})

//start server
//------------------
app.listen(3000, function(){
  console.log('Running on port 3000!!!')
});
