// Requiring dependencies
var http = require('http');
var fs = require('fs');
var url = require('url');

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

    var urlParts = url.parse(req.url);
    console.log(urlParts);

     switch (urlParts.pathname) {
        case '/':
            displayRoot(urlParts.pathname, req, res);
            break;
        case '/index.html':
            displayRoot(urlParts.pathname, req, res);
            break;
        case '/favoriteFood.html':
            displayFavoriteFood(urlParts.pathname, req, res);
            break;   
        case '/favoriteMovies.html':
            displayFavoriteMovies(urlParts.pathname, req, res);
            break;
        case '/favoriteCSS.html':
            displayFavoriteCSS(urlParts.pathname, req, res);
            break;    
        case '/contact.html':
            displayContact(urlParts.pathname, req, res);
            break;
        case '/assets/css/reset.css':
            displayReset(urlParts.pathname, req, res); 
            break;
        case '/assets/css/style.css':
            displayStyle(urlParts.pathname, req, res); 
            break;
        case '/assets/css/spacing.css':
            displaySpacing(urlParts.pathname, req, res); 
            break;
        case '/assets/css/favoriteFoodStyle.css':
            displayFoodStyle(urlParts.pathname, req, res);
            break;
        case '/assets/css/favoriteFoodSpacing.css':
            displayFoodSpacing(urlParts.pathname, req, res);
            break;    
        case "/assets/images/ChristiSavinoImage.jpg":
            displayCSImage(urlParts.pathname,req,res);
            break;
        case "/assets/images/bootstrap.jpg":
            displayBootstrapImage(urlParts.pathname, req, res);
            break;    
        case "/assets/images/squaregithub.png" :
            displayGithubImage(urlParts.pathname,req,res);
            break;
        case "/assets/images/linkedin-square.png":
            displayLinkedinImage(urlParts.pathname,req,res);
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
}

function displayFoodStyle (url, req, res) {
    fs.readFile("assets/css/favoriteFoodStyle.css", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    });
}

function displayFoodSpacing (url, req, res) {
    fs.readFile("assets/css/favoriteFoodSpacing.css", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    });
}

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

function displayContact (url, req, res) {
    fs.readFile("contact.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
};

function displayReset (url,req,res) {
  fs.readFile("assets/css/reset/css",function(err,data) {
    res.writeHead(200,{'Content-Type': 'text/css'});
    res.end(data);
  })
}

function displayStyle (url,req,res) {
  fs.readFile("assets/css/style.css",function(err,data) {
    res.writeHead(200,{'Content-Type': 'text/css'});
    res.end(data);
  })
}

function displaySpacing (url,req,res) {
  fs.readFile("assets/css/spacing.css",function(err,data) {
    res.writeHead(200,{'Content-Type': 'text/css'});
    res.end(data);
  })
}

function displayCSImage (url,req,res) {
  fs.readFile("assets/images/ChristiSavinoImage.jpg",function(err,data) {
    res.writeHead(200,{'Content-Type': 'image/jpeg'});
    res.end(data);
  })
}

function displayBootstrapImage (url,req,res) {
  // var pic = fs.readFileSync('assets/images/bootstrap.jpg', 'base64');
  //    res.writeHead(200,{'Content-Type': 'image/PNG'});
  // return res.end(pic);

  // fs.readFile("assets/images/bootstrap.jpg",function(err,data) {
    fs.readFile("assets/images/bootstrap.jpg",function(err,data) {
    res.writeHead(200,{'Content-Type': 'image/jpeg'});
    res.end(data);
  })
}

function displayGithubImage (url,req,res) {
  fs.readFile("assets/images/squaregithub.png",function(err,data) {
    res.writeHead(200,{'Content-Type': 'image/PNG'});
    res.end(data);
  })
}

function displayLinkedinImage (url,req,res) {
  fs.readFile("assets/images/linkedin-square.png",function(err,data) {
    res.writeHead(200,{'Content-Type': 'image/PNG'});
    res.end(data);
  })
}

// For any path that is not defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}

// Starts our server.
server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});