// core modules
const path = require('path');

//express and other Modules
const express = require('express');

//module import
const rootDir = require('../utils/path');
const adminRoute = require('../routes/admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop.pug', {pageTitle: 'My Shop', prods: adminRoute.products, path: 'shop'});
});

module.exports = router;