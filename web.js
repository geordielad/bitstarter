var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var htmlBuff = fs.readFileSync('index.html')
  response.send(htmlBuff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// URL to test
// http://ec2-54-225-87-230.compute-1.amazonaws.com:8080
//
