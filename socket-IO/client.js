let net = require("net");
var readlineSync = require('readline-sync');
let readline = require('readline');
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let client = net.connect({port:9090, host:"localhost"});
client.on("connect", ()=> {
    console.log("Connected to serveer...");
    client.write("I am first client");
    //dynamic 
    //client.write(readlineSync.question("What are you doing?"))
});

r1.on("line", (msg) =>{
    client.write(`client send: ${msg}`);
})
