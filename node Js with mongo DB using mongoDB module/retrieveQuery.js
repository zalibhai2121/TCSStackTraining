let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
    if(!err) {
        let db = client.db("meanstack");
        let cursor = db.collection("Product").find({"price": {$gt: 60000}});
        //console.log(cursor);
        cursor.each((err2, doc) => {
            if(!err2){
                console.log(doc)
            } else {
                console.log("ERRROR IS: " + err2.message)
            }
            client.close();
        })
    }
})