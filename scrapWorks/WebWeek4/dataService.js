module.exports.dataDelay = function (){

    return new Promise(function(resolve,reject){
        let message = {
            data: "hello"
        }

        setTimeout(()=>{
            resolve(message)
        },2000);
    })
}