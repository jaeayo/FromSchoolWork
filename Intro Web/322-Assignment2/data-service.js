var employees = [];
var departments = [];
var fs = require("fs");

module.exports.initialize = function() {
    return new Promise(function(resolve, reject){
        try{
            fs.readFile('./data/employees.json', 'utf8',(err,data) => {
                if(err) throw err;
                employees = JSON.parse(data);
            });

            fs.readFile('./data/departments.json', 'utf8',(err,data) => {
                if(err) throw err;
                departments = JSON.parse(data);
            });             
        } catch(ex) {
            reject("Unable to read file");
        }
        resolve("Success to read file");
    });
};

module.exports.getAllEmployees = function(){
    return new Promise(function(resolve,reject){
            if(employees.length === 0){
                reject("No results returned");
            }
        resolve(employees);
    });
};

module.exports.getManagers = function(){
    var array_managers = [];
    return new Promise(function(resolve,reject){
        if(employees.length === 0){
            reject("No results returned");
        } else {
            for(var j = 0; j < employees.length; j++){
                if(employees[j].isManager == true){
                    array_managers.push(employees[j]);
                }
            }
        }
        if(array_managers.length === 0){
            reject("No results returned");
        }
        resolve(array_managers);
    });
};

module.exports.getDepartments = function(){
    return new Promise(function(resolve,reject){
        if(departments.length === 0){
            reject("No results returned");
       } 
    resolve(departments);
    });
};
