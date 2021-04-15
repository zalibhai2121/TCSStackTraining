let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (!err) {
        let db = client.db("meanstack");
        db.collection("Product").updateOne({ _id: 100 }, { $set: { price: 98000 } }, (err2, result) => {
            if (!err2) {
                //console.log(result);
                if(result.modifiedCount > 0){
                    console.log("Record updated successfully")
                } else {
                    console.log("Record did not update")
                }
            } else {
                console.log("Error is: " + err2.message)
            }
            client.close();
        });
    }
})