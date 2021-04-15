var app = require("express")();
var ws = require("express-ws")(app); //loading express and creating the reference of ws module
app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.ws("/", (socket, res) =>{
    socket.send("Message from server...")
})
app.ws("open", (data) => {
    console.log(data.returnValues)
})


app.listen(9090, ()=> ("Websocket Running on port 9090"));