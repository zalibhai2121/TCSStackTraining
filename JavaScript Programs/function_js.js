
function add(a,b){
    return a+b;
}

document.write("Normal function <br/>");
document.write(add(100,200));

//  expression style function
var sum = function addNumber(a,b){
    return a+b;
}
document.write("<br/>Expression style function <br/>");
document.write(sum(20,40));

//anonymous function
var sumOFNumber = function(a,b){
    return a+b;
}
document.write("<br/>Expression style without function name <br/>");
document.write(sumOFNumber(20,40));

//call back function: passing the function body or function itself to another function
document.write("<br/> Call Back function <br/>")
function sayHello(fname, callback){
    document.write("<br/> Welcome, your name is "+callback(fname));
}

var maleInfo = function(fname){
    return "Mr" + fname;
}
var femaleInfo = function(fname){
    return "Miss" + fname;
}

sayHello("Raj", maleInfo);
sayHello("Reeta", femaleInfo);
sayHello("Ajay", function(fname){
    return "Mr." + fname;
});

// Arrow function
