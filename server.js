var express  = require('express');
var app      = express();

app.use(express.static(__dirname + '/public'));

app.listen(7575);
console.log("App listening on port 7575");
