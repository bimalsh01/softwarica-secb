const router = require('express').Router();
const productController = require("../controllers/productControllers")

router.post('/create_product', productController.createProduct)

// get all products
router.get("/get_products", productController.getProducts)

// single product
router.get("/get_product/:id", productController.getSingleProduct)


module.exports = router;