const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';    // default port when connecting to Docker container - see ReadME.md

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
    console.log("Connected correctly to DB.");

    // if (err) {
    //     console.log('err');
    // }
    // else {
    //     console.log("Connected correctly to DB.");
    //     db.close();
    // }

    // // database name
    const dbname = 'myproject';
    const db = client.db(dbname);

    // // new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // // insert into customer table
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result){
        console.log('Document inserted');
    });
    
    var customers = db
        .collection('cusomters')
        .find()
        .toArray(function(err, docs){
            console.log('Collecction: ', docs);

            // clean up
            client.close();
    });

});

