'use strict';

var express = require('express');
var app = express();

var server = require('http').Server(app);

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

var port = process.env.PORT || 8080;
app.use(express.static('public'));

app.get('/hello', function(req, res) {
  res.send('hello world')
});

app.listen(port);
