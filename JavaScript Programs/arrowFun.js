var sayHello = function(e) {
    return "Welcome " + e;
}

document.write("<br/> Expression style <br/>");
document.write(sayHello("Zainab"));

// arrow function is known as anonymous --- lambda
// default return the value
// 1. if we want to write code very less and not repeating same logic again and again
document.write("<br/> arrow style <br/>");
var sayHi = (name) => "Welcome " + name;
document.write(sayHi("Ravi"))

var addNum1 = (a,b) => a+b;
var findLargest = (a,b) => {
    if (a>b){
        return a;
    } else {
        return b;
    }
}

document.write("<br/> Addition using arrow <br/>");
document.write(addNum1(20,39));
document.write("<br/> Largest of two number is <br/>");
document.write(findLargest(29,3902));