let ProductModel = require("../model/product.model.js");

//Retrieve all product detals
let getProductDetails = (req, res) => {
    ProductModel.find({}, (err, result) => {
        if(!err){
            res.json(result);
        }
    })
}


module.exports = {getProductDetails};