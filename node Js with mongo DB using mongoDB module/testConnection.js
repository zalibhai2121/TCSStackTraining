//load the mongodb module as well as creating the reference using MongoClient
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,  { useUnifiedTopology: true },(err, client)=> {
    let db = client.db("meanstack");
    if(!err){
        console.log("connected successfully")
    } else {
        console.log("ERROR is : "+err);
    }
    client.close();
})
