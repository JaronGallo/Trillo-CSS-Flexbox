var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); 


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });