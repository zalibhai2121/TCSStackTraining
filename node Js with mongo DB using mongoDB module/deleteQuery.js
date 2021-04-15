let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";
mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (!err) {
        let db = client.db("meanstack");
        db.collection("Product").deleteOne({ _id: 100 }, (err2, result) => {
            if (!err2) {
                //console.log(result);
                if (result.deletedCount > 0) {
                    console.log("Record Deleted successfully")
                } else {
                    console.log("Record did not exist")
                }
            } else {
                console.log("Error is: " + err2.message)
            }
            client.close();
        });
    }
})