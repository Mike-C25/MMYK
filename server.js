var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});


// CONTACTS API ROUTES BELOW


// define the folder that will be used for static assets
app.use(express.static('./'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('./', function(request, response) {
    response.sendFile('index.html',{ root: __dirname});
});