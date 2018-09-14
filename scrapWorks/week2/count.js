var count;

module.exports.setCounter = function(newCount) {
    count = newCount;
}

module.exports.getCounter = function(){
   return count; 
}

module.exports.incrementCounter = function(){
    count++;
}

