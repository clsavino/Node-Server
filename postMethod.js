//*************************************///////
// Requires the chrome extension - // Postmaster
// open Postmaster select tab - localhost:8080
// select POST from drop down tab that says GET
//Put some data in the first window to post and see on the console.log, I used:
//{
// "routeName": "christi",
// "name": "Christi",
// "role": "Jedi Knight",
// "age": 42,
// "forcePoints": 1900
// }
// click send
// see what changes in the Body tab in bottom window
// see what is written in the console/ command line
//see changes to webpage at localhost:8080

// require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;
//Create server
var server = http.createServer(function(req, res) {

  // Saving the request method as a variable.
  var method = req.method.toLowerCase();
  var requestData = '';

  // When the server receives data, it will add it to requestData.
  req.on('data', function(data) {
    requestData += data;
    console.log('You just posted some data to the server!');
    console.log("Your data was " + requestData);
  });

  // When the request has ended...See these on the webpage tab and body
  req.on('end', function() {
    res.write('<html><head><title>Hello Noder!</title></head><body>');
    res.write('<h1>Thank You!</h1>');
    res.write('</body></html');
    res.end()
  });

});

// Start the server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});
