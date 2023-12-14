const router = require('express').Router();
const productController = require("../controllers/productControllers")

router.post('/create_product', productController.createProduct)

// get all products
router.get("/get_products", productController.getProducts)


module.exports = router;