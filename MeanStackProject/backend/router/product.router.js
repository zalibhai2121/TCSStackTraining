let express = require("express");
let router = express.Router(); //pass flow to controller
let productController = require("../controlleer/product.controller.js");

//mapping sub path with http method
router.get("/allProductDetails", productController.getProductDetails);



module.exports = router;