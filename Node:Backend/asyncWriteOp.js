let fs = require("fs");
var msg = "\nthis is asyn message storage through fs module";
//asyn opp 
fs.writeFile("info1.txt", msg, {flag:"a"}, (err) => {
    if (!err){
        console.log("Data stored in file successfully");
    }
});