// Requiring dependencies
var http = require('http');
var fs = require('fs');
var url = require('url');

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

    var urlParts = url.parse(req.url);

     switch (urlParts.pathname) {
        case '/':
            displayRoot(urlParts.pathname, req, res);
            break;
        case '/home':
            displayRoot(urlParts.pathname, req, res);
            break;
        case '/favoriteFood':
            displayFavoriteFood(urlParts.pathname, req, res);
            break;
        case '/favoriteMoives':
            displayFavoriteMovies(urlParts.pathname, req, res);
            break;
        case '/favoriteCSS':
            displayFavoriteCSS(urlParts.pathname, req, res);
            break;
        default:
            display404(urlParts.pathname, req, res);
    }
};

function displayRoot (url, req, res) {
    fs.readFile("index.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
};

function displayFavoriteFood (url, req, res) {
    fs.readFile("favoriteFood.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
};

function displayFavoriteMovies (url, req, res) {
    fs.readFile("favoriteMovies.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
};

function displayFavoriteCSS (url, req, res) {
    fs.readFile("favoriteCSS.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
};

// Starts our server.
server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});