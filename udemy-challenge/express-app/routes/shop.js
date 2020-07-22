// core modules
const path = require('path');

//express and other Modules
const express = require('express');

//utils module import
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;