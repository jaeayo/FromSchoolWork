/*********************************************************************************
* WEB322 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: ____Jae Park___ Student ID: _135160174__ Date: ___Oct.2nd.2018____
*
* Online (Heroku) Link:     https://evening-thicket-27963.herokuapp.com/
*
********************************************************************************/

var data_service = require("./data-service.js");

var express = require("express");
var path = require("path");
var app = express();

app.use(express.static('public'));


var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}


app.get("/", function (req, res){
 res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/about", function (req, res){
 res.sendFile(path.join(__dirname,"/views/about.html"));
});

app.get("/employees", function (req, res){
 data_service.getAllEmployees()
 .then(data => res.json(data))
 .catch(err => res.json({message: err})); 
});
   
app.get("/managers", function (req, res){
    data_service.getManagers()
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));
});

app.get("/departments", function (req, res){
    data_service.getDepartments()
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));
});

app.use(function (req,res){
    res.status(404).send("Page Not Found");
});



    app.listen(HTTP_PORT, () => {
    console.log("listening on port: " + HTTP_PORT); 
    data_service.initialize().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}) 
