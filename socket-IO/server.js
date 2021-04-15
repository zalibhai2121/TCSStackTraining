let net = require("net");
let server = net.createServer();
console.log("HI")
server.on("connection", (socket) => {
    console.log("new client connected...");

    //SERVER --> CLIENT
    socket.on("data", (data)=>{
        console.log(data.toString());
    });

});
console.log("Hello")
server.listen(9090, () => console.log(`Server is running on port number 9090`));