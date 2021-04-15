/* -- one way
let express = require("express");
let app = express();
*/

let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
let path = require("path");
let port = 9090;

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/login.html');
})
app.post("/checkLogin", (req,res) =>{
    let user = req.body.user;
    let pass = req.body.pass;
    if(user == "Zainab" && pass == "123"){
        res.send("Successful login")
    }else {
        res.send("Failure, try again")
    }
})
app.listen(port, ()=>console.log(`Server running on port number ${port}`));