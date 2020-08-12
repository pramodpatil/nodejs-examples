//core modules
const path = require('path');

// express and other modules
const express = require('express');

// Utils module
//const rootDir = require('../utils/path');
const productController = require('../controller/product-controller');

// gobal veriables
const products = [];

const router = express.Router();

router.get('/add-product', productController.getAddProducts);

router.post('/add-product', productController.postAddProduct);

module.exports = router;

//exports.router = router;
//exports.products = products;