let http = require("http");
let url = require("url");
let port = 9999;
let loginInfo = `
    <form action="/login" method = "get">
        <label >UserName</label>
        <input type="text" name = "user"> <br>
        <label>Password</label>
        <input type="password" name = "pass" /> <br>
        <input type="submit" value="Sign In"/>
        <input type="reset" value="reset">
    </form>
    `

let server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url = "/") {
        res.setHeader("content-type","text/html");
        res.end(loginInfo);
    } else{
        var data = url.parse(req.url, true).query;
        if (data.user == "Ajay" && data.pass == "Kumar") {
            res.write("Success");
        } else {
            res.write("Failure");
        }
        res.end();

    }
});
server.listen(port, () => console.log(`running port num ${port}`))