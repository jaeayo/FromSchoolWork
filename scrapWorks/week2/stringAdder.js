var someString;

module.exports.setString = function(newString){
    someString = newString;
}

module.exports.addString = function(stringToAdd){
    someString += stringToAdd;
}

module.exports.getString = function(){
    return someString;
}