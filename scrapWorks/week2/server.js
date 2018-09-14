var express = require("express");
var counter = require("./modules/count.js");
var strAdder = require("./modules/stringAdder.js")
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.get("/", function(req,res){
    counter.incrementCounter();
    strAdder.addString("!");
    res.send(strAdder.getString() + " " + counter.getCounter() + " times");
   // res.send("Hello World! " + counter.getCounter() + " times");
});

app.get("/about", function(req,res){
    res.sendFilr(Path.join(__dirname,"/views/about.html"));
});

app.listen(HTTP_PORT, function(){
    counter.setCounter(0);
    strAdder.setString("Hello World")
    console.log("server started on: " + HTTP_PORT);
});


