let fs = require("fs");
var empObj = '{"id": 100, "name": "ravi", "salary":12000}';
//covertt string to obj
var empJson = JSON.parse(empObj);
console.log("id is " + empJson.id);
//covert json to strong 
var empString = JSON.stringify(empJson);
fs.writeFile("emp.json", empString, {flag:"a"}, (err)=>{
    if (!err){
        console.log("record success...");
    }
});