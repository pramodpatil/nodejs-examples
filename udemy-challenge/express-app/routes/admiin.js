//core modules
const path = require('path');

// express and other modules
const express = require('express');

// Utils module
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'admin.html'));
    
    // with utils functionality
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;