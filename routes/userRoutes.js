// import
const router = require('express').Router();
const userController = require("../controllers/userControllers")

// create user api
router.get('/create', userController.createUser)

//  task 1: create login api
router.get('/login', userController.loginUser)

// exporting
module.exports = router;