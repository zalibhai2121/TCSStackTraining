// load all require modules
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");


//Database url details
let url = "mongodb://localhost:27017/meanstack";


//middleware enable data from post method
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//database connection without warning
const mongodb = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongodb); // ready to connect


//connect the data
mongoose.connection;

//link to router
var Product = require("./router/product.router.js");

//middleware
app.use("/product", Product)

app.listen(9090, ()=> console.log("Server running on port number 9090"));


