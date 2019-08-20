var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/products.controllers')

router.get('/', ProductController.getProducts)

module.exports = router;
