'use strict';

var request = require('request');
var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server, {
  'transports': 'xhr-polling',
  'polling duration': 10
});

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());

io.on('connection', function (socket) {

});

app.get('/hello', function(req, res) {
  res.send('hello world')
});

app.listen(port);
