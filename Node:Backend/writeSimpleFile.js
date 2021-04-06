let fs = require("fs"); //Load core fs module
let msg = 'Welcome to Node JS FS module to store data in file';
fs.writeFileSync('info.txt', msg);

// append {flag: "a"} --> it will override it without this
console.log("data stored successfully");
console.log("done");