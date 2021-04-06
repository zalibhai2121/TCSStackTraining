var fs = require("fs");
fs.readFile("emp.json", (err, data) =>{
    if(!err){
        // console.log(data);
        let empString = data.toString();
        let empJson = JSON.parse(empString);
        console.log(empJson.id);
        console.log(empJson.name);
        console.log(empJson.salary)
    }
});