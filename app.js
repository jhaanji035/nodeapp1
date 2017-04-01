//var http = require('http');
var express = require('express');
var app = express();
/*var server = http.createServer(function(request, response){
  console.log('creating server at ', new Date('Y-m-d, H:i:s'));
  if(response){
    response.end('<h2>Wow....My first application is running...!!!</h2>');
  }
});*/

// Routes
// app.get('', function(req, res){
//   res.send('Hi , we are on home page');
// });
app.get('/', function(req, res){
  res.sendFile(__dirname+"/index.html");
});
app.get('/login', function(req, res){
  res.sendFile(__dirname+"/login.html");
});
app.get('/about', function(req, res){
  res.sendFile(__dirname+"/about.html");
});
app.post('/main', function(req, res){
  res.sendFile(__dirname+"/main.html");
});
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('Server is running...!!');
});
