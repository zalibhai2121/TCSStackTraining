let fs = require("fs");
var obj = require("readline-sync");
let emp = new Array();

let howmany = obj.question("How many data entries?");

for (i = 0; i < howmany; i++) {
    let id = obj.question("Enter Id ");
    console.log("your id is " + id);
    let name = obj.question("Enter name ");
    console.log("your name is " + name);
    let salary = obj.question("Enter salary ");
    console.log("your salary is " + salary);
    let emp1 = { "id": id, "name": name, "salary": salary };
    emp.push(emp1);

}

let jsonData = JSON.stringify(emp);
fs.writeFileSync("project.json", jsonData);
console.log('file written');