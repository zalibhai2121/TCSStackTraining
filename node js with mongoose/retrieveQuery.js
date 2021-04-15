let obj = require("mongoose");
obj.Promise = global.Promise; //ref
let url = "mongodb://localhost:27017/meanstack";
const mongoose = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
obj.connect(url, mongoose); //ready to connect
let db = obj.connection;
db.on("error", (err) => console.log("Error generated: " + err));
db.once("open", ()=> {
    // define schema
    let productSchema = obj.Schema({
        _id: Number,
        pname: String,
        price: Number
    });
    //creating model using schema
    let Product = obj.model("",productSchema, "Product");
    
    //create reference using model
    Product.find({}, (err, result) => {
        if(!err){
            result.forEach(doc => console.log(doc));
        } else {
            console.log("Error is: " + err) 
        }
        obj.disconnect();
    })
})