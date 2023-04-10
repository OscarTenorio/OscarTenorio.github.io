var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

// serve static content
app.use(express.static('public'));
app.use(cors());

// create user account (placeholder rough way)
// app.get('/account/create/:name/:email/:password', function(req, res){
//     res.send({
//         name:       req.params.name,
//         email:      req.params.email,
//         password:   req.params.password
//     });
// });

// create user account - now using the dal (data abstraction layer)
app.get('/account/create/:name/:email/:password', function (req, res) {

    // check if account exists
    dal.find(req.params.email).
        then((users) => {

            // if user exists, return error message
            if(users.length > 0){
                console.log('User already in exists');
                res.send('User already in exists');    
            }
            else{
                // else create user
                dal.create(req.params.name,req.params.email,req.params.password)
                    .then((user) => {
                        console.log(user);
                        res.send(user);            
                    });            
            }

        });
});

// login user (commented out in the video for some reason, quess they're just not using it now)
// app.get('/account/login/:email/:password', function(req, res){
//     res.send({
//         email:      req.params.email,
//         password:   req.params.password
//     });
// });

// all accounts (yea this was always just a proof-of-concept approach, real way next)
// app.get('/account/all', function(req, res){
//     res.send({
//         name:       'peter',
//         email:      'peter@mit.edu',
//         password:   'secrett'
//     });
// });

// all accounts (real way)
app.get('/account/all', function (req, res) {

    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + 3000);
