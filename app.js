var express = require('express');
var app = express();
var path = require('path');
var cloudinary = require('cloudinary');

//Env for Heroku (dyanmically adjusted)
var port = process.env.PORT || 8080;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//dynamically toggle to port 
app.listen(port);


//set up cloudinary config
cloudinary.config({ 
  cloud_name: 'sample', 
  api_key: '874837483274837', 
  api_secret: 'a676b67565c6767a6767d6767f676fe1' 
});

//log if server is on 
console.log('Application loade successfully on port ' +port);