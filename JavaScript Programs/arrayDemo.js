// array: collection of more than one elements or values
var obj1 = [100,200,300,400,500,600,700]; //literal
var obj2 = new Array(200,300,400,500,600,700); //created using new key word

document.write("<br/>");
document.write(obj1);
document.write("<br/>");
document.write(obj2);

// retreive element one by one

document.write("<br/> Using for loop <br/>");
for(var i = 0; i < obj1.length; i++){
    document.write("<br/>" + obj1[i]);
}


document.write("<br/> Call back style <br/>")
obj1.forEach(dis);

function dis(a){
    document.write("<br/>" + a);
}

document.write("<br/> DIsplay value using an anonymous funciton <br/>")
obj1.forEach(function(a){
    document.write("<br/>" + a);
})

document.write("<br/> DIsplay value using an arrow function <br/>")
obj1.forEach(v => document.write("<br/>" + v));