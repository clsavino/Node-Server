//Setting up a web server
//require/import the HTTP module
var http = require('http');
//define port to listen to - http://localhost:8080
var PORT = 8080;
//function to handle requests and send response
function handleRequest (request,response) {
	//console.log(response); 
	//console.log(request);// incoming message
	response.end('It works! This was your URL: ' + request.url);
}
//create a server
var server = http.createServer(handleRequest);

//start the server
server.listen(PORT,function() {
	//Callback triggered when server is successfully listening. 
	console.log('Server listening on: http://localhost:%s',PORT);
});
