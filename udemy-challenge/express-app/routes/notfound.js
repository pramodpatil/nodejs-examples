// core modules
const path = require('path');

//express and other Modules
const express = require('express');

//utils module import
const rootDir = require('../utils/path');
const errorController = require('../controller/error-controller');

const router = express.Router();

router.use('/', errorController.get404);

module.exports = router;