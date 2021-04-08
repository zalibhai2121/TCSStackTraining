var url = require("url");
var urlDetails = "http://localhost:9090?name=Ravi&age=21";
// console.log(url.parse(urlDetails));
var details = url.parse(urlDetails,true).query;
console.log(details);
var name = details.name;
var age = details.age;
console.log(name + " "+ age);