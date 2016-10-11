//Require/import the HTTP module
var http = require('http');
//Define 2 ports
var PORT1=7000;
var PORT2=7500

//Two different functions to handle requests, one for each server.
function handleRequest1(request, response){
    response.end("Request1, You made it here, give yourself a hand!");
}

function handleRequest2(request, response){
    response.end('Request2, You made it!');
}

//Create servers
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//Starting our servers
server1.listen(PORT1, function(){
    //Callback triggered when server is successfully listening.
    console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. 
    console.log("Server listening on: http://localhost:%s", PORT2);
});