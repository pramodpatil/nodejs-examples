// core modules
const path = require('path');

//express and other Modules
const express = require('express');

//module import
//const rootDir = require('../utils/path');
//const adminRoute = require('../routes/admin');
const productsController = require('../controller/product-controller');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;