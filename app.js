var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var api = require('./routes/api');

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api', api);

app.listen('3000');
console.log('<--------------- App is running ---------------->');

module.exports = app;
