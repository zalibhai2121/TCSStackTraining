let app = require("express")();
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
let product = []

mongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
    if(!err) {
        let db = client.db("meanstack");
        let cursor = db.collection("Product").find();
        //console.log(cursor);
        cursor.each((err2, doc) => {
            if(!err2){
                if(doc!=null){
                    product.push(doc);
                }
            } else {
                console.log("ERRROR IS: " + err2.message)
            }
            client.close();
        })
    }
})
app.get("/", (req, res)=>{
    res.json(product);
})


app.listen(9090, () => {console.log("Running on port number 9090")});