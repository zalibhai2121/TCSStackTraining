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
    let p1 = new Product({_id:103,pname:"Phone",price:73929});
    p1.save((err, result) => {
        if (!err){
            console.log("Record inserteed successfully " + result);
        } else {
            console.log("Error is: " + err);
        }
        obj.disconnect();
    });
})