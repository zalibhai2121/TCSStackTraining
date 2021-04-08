let express = require("express");
let app = express();  //reference of express module
let port = 9090;
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extend:true})); //enable body data
app.use(bodyParser.json()); //enable json data


//get methods
app.get('/', (req,res) =>{
    res.send("Welcome to Express module");
});
app.get('/aboutus', (req, res) =>{
    res.send("Welcome to about us page");
} );
app.get('/contactus', (req, res) =>{
    res.send("Welcome to contact us page");
} );
app.get('/login', (req, res) =>{
    res.send("Welcome to login page");
} );
///singleQuery?name=Zainab
app.get('/singleQuery', (req, res) => {
    let name = req.query.name;
    res.send("Welcome user "+ name);
});

//passing multiple values using query param
//multiple?id=100&name=Ramesh&salary=25000
app.get('/multiple', (req, res) =>{
    let name = req.query.name;
    let id = req.query.id;
    let salary = req.query.salary;
    salary = eval(salary) + 5000;
    res.send("Your id is " + id + " and name is " + name + " and the salary is " + salary);
});

app.get('/singlePath/:name', (req, res) => {
    let name = req.params.name;
    res.send("Welcome user "+ name);
});

app.get('/multiplePath/:id/:name/:salary', (req, res) => {
    let id = req.params.id;
    let naem = req.params.name;
    let salary = req.params.salary;

    res.send("id: " + id + " name :"+ naem + " salary: " +salary);
});
//post without passing any value with empty path
app.post('/', (req,res) =>{
    res.send("Welcome to Post method")
})

//http://localhost:9090/storeData
app.post('/storeData', (req,res) =>{
    let name = req.body.name;
    res.send("Welcome to Node JS Store Data method " + name);
})

app.listen(port,()=> console.log(`Server running on port number ${port}`));