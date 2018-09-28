function doSomethingDelay(fn){
    setTimeout(()=>{
        console.log("hello");
    },2000);
}

function afterHello(){
    console.log("After Hello");
}

doSomethingDelay(afterHello).then(()=>{
    //execute me afterwards
    console.log("After Hello");
});




function doSomethingDelay(fn){
 return new promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("hello");
        resolve();
    },2000);
 });                //reject : bad scenario
                    //resolve : good scenario
    
}



doSomethingDelay().then((x)=>{
    //execute me afterwards
    console.log(data);
});


doSomethingDelay().then((x)=>{
    //execute me afterwards
    console.log(x);
}).catch(()=>{
    console.log("Uh oh");
});

doSomethingDelay().then((x)=>{
    //execute me afterwards
    console.log(x);
}).catch((err)=>{
    console.log(err);
});


//// *&!@&*#&*(!&@#*((!@&(*#&!(*@#&*(!@#&(*(!@&*!))))))))


const PI = 3.14;

try{
PI = 5;
} catch {
    console.log("cannot Overwrite PI, We broke the universe");
}

console.log("PI: " + PI);



const PI = 3.14;

try{
PI = 5;
} catch(err) {
    console.log("cannot Overwrite PI" + err.message);
} finally{
    console.log("always gets executed");
}

console.log("PI: " + PI);








function divide(x,y){
    if(y == 0){
        throw new Error("Division by zero");        
    }
    return x/y;
}

console.log(divide(5,0));




function divide(x,y){
    if(y == 0){
        throw new Error("Division by zero");        
    }
    return x/y;
}

console.log(divide(5,0));



let x;

try{
    x = divide(5,0);
} catch(err) {
    console.log(err.message);
    x = NaN;
}




/////!@#*%!(*$*!@)*#!@*#()*!@)#!*#!)))))!@)#*(!@*#)(!@*#)(!)))


try{
    console.log(asdfasdfasdf);
} catch(err){
    console.log(err.message);
}

console.log("continue executing synchronous code");

