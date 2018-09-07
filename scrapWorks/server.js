/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: ______________________ Student ID: ______________ Date: ________________
*
* Online (Heroku) URL: _______________________________________________________
*
********************************************************************************/

var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.get("/", function(req,res){
    res.send("<h1>Hello World</h1>");
});

app.get("/about", function(req,res){
    res.send("About");
});


app.listen(HTTP_PORT, function(){
    console.log("server listening on : " + HTTP_PORT);
})

