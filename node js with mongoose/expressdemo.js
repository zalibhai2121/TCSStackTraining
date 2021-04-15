let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({urlencoded:true}));


/*
index.html - get
retrieve all course - get
create, delete, and update - post
*/

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

//display http or request -- res.write(table);
//display in table optional

//delete update ---
app.post("/storeCDetails", (req, res) => {
    /* 
        retrieve data from body part
        connect to database
        store in database
            res.sendFile(__dirname + "/index.html");
    */
});
app.post("/deleteCDetails/:cid", (req, res) => {
     /* 
        retrieve data from body part
        connect to database
        delete in database
            res.sendFile(__dirname + "/index.html");
    */
})

app.get("/get", (req, res) => {
    /* 
        retrueve records from mongodb and storee in array
        
        res.json(arrayName);
    */
})

app.listen(9090, ()=> console.log("Server running on 9090"));