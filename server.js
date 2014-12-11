var express = require('express');
var app = express();
var server = require('http').createServer(app);

var ejs = require('ejs');
app.set('view engine', 'ejs');


app.get('/', function(request, response){
  // response.send("Hello world");
  response.render('index');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
