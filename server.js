var express  = require('express');
var fs       = require('fs');
var config   = require('./config.json');

var app      = express();

// Base directory
app.use(express.static(__dirname + '/public'));

// API
app.get('/api/config', function(req, res) {
  res.send(config);
});

// Open connection on a port
app.listen(7575);
console.log("App listening on port 7575");