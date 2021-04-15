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
    Product.deleteOne({_id: 101}, (err, result) => {
        if(!err){
            if(result.deletedCount > 0){
                console.log("Record deleted");
            } else {
                console.log("Record not present")
            }
        } 
        obj.disconnect();
    })
})