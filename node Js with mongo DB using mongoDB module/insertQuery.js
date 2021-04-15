let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url,  { useUnifiedTopology: true }, (err, client) => {
    if(! err){
        let db = client.db("meanstack");
        db.collection("Product").insertOne({_id: 104, pname: "Tablet", price: 55000}, (err, result) => {
            if(!err){
                console.log(result.insertedCount);
            }else {
                console.log("Error is: " + err.message)
            }
            client.close();
        });
    } 
})