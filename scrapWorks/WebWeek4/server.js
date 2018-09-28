const express = require("express");
const ds = require("./modules/dataService.js")

const app = express;

const HTTP_PORT = process.evn.PORT || 8080;


app.use((req,res,next)=>{
    req.message = "hello";
});

app.use((req,res,next)=>{
    req.message += " Wolrd";
    next();
})

app.get("/", (req, res) =>{
    console.log(req.message);
    ds.dataDelay().then((data)=>{
        res.send(data);
    }) .catch(err)
    res.send(err);
})


app.get("/employee/:id", (req,res)=>{                   // very important concept
    res.send("data for employee: " + req.params.id);     // search id and get the id
})

app.get("/employees",(req,res)=>{
    if(req.query.status){
        res.send("Data for All " + req.query.status + "Students")
    } else if (req.query.whatever) {
        res.send("Data for All " + req.query.whatever + " Students");
    } else {
        res.send("Data for all employees");
    }
})

app.use((req, res)=>{
    res.send("404! can't find your route");
    //res.status(404).send("page not Found";
})

app.use((req,res) => {
    res.status(404).end();
});


app.get("/json", (req,res) => {
    let myObj = {
      message: "Hello"
    };
    res.send(JSON.stringify(myObj));
})

Mydata.initialize().then(()=>{

app.listen(HTTP_PORT,()=>{
    console.log("Listening on: " + HTTP_PORT);
})

});