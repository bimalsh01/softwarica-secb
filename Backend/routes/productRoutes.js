const router = require('express').Router();
const productController = require("../controllers/productControllers")

router.post('/create_product', productController.createProduct)


module.exports = router;