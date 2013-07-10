#!/usr/bin/env node
// ##### imports
var express = require('express');
var fs = require('fs');


// ##### app settings
var app = express.createServer(express.logger());
var templatePath = '.' // IMPORTANT set to . if no specific path available
 

// ##### helper functions
var rendHtml = function(file2rend){
    // *html render:*
    // Reads the file synchronously and returns a buffered string
    file = templatePath + '/' + file2rend;
    buffer = new Buffer(fs.readFileSync(file));
    return buffer.toString();
}


// ##### app main behavior
app.get('/', function(request, response) {
    response.send(rendHtml('index.html'));
});


// ##### Server launch instance
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});