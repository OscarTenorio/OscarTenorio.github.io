const express = require('express');
const app     = express();

//use get for the root ('/') of the application, using a callback function to take an action once the home page is visited
// req = request, res = response  <- just conventional shorthand
app.get('/', function(req, res){  // note syntax
  res.send('Hello World!');
});

// listener - first param is port being listened on, second param is what to do once it detects a hit on that port
app.listen(3000, function(){
  console.log('Running on port 3000!')
});
