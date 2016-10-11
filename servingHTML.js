// Requiring dependencies
var http = require('http');
var fs = require('fs');

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

    fs.readFile("serverindex.html", function(err, data){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    });

};

// Starts our server.
server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});