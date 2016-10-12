# Node-Server - Serving HTML the hard way

Learning to set up web servers with Node.js without using Express. Various steps in the learning process shown in the javascript server files that handle requests and send responses:
* One server - firstServer.js
* Two servers - twoServers.js
* Serving HTML to a path - portfolioServer.js
* Process 6 requests and serve the pages along with their CSS and Image files - server6paths.js

# Screenshots for server6paths.js

## The web server - server6paths.js can serve HTML pages processing requests for 6 paths. The first two serve the index.html page on localhost:8080 depending on whether the route is '/' or '/index.html'. All 5 web pages have working links to all the other pages and responses operate flawlessly even responding with a 404 for any path not specified.

![Alt text](/assets/images/server1.PNG?raw=true )

## Screenshot 2 shows the Contact page that is served with its CSS styling and image files
![Alt text](/assets/images/server2.PNG?raw=true )

## Screenshot 3 shows the Favorite Movies page
![Alt text](/assets/images/server3.PNG?raw=true )

## Screenshot 4 shows the Favorite CSS page
![Alt text](/assets/images/server4.PNG?raw=true )

## Screenshot 5 shows the Favorite Foods page with a sticky nav bar on the left with all the links to the other pages 

![Alt text](/assets/images/server5.PNG?raw=true )

## Screenshot 6 shows the default option for all paths not specified - error 404

![Alt text](/assets/images/server6.PNG?raw=true )

# Technologies Used
#### The following technologies and tools were used
* **JavaScript**
* **Node.js**

#### The following npm modules were used 
* **http**
* **fs**
* **url**

# Getting Started
#### The Node.js apps are maintained in Github and can be run in the command line provided the html, css, and image files are downloaded to the local machine.

# Some code examples
```javascript
var server = http.createServer(handleRequest);

// Example of a few requests that are processed
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

// Starts the server             
server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
```

