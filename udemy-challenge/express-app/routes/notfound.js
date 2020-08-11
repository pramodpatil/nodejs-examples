// core modules
const path = require('path');

//express and other Modules
const express = require('express');

//utils module import
const rootDir = require('../utils/path');

const router = express.Router();

router.use('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'page-not-found.html'));
    //res.sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
    res.render('404.pug', {pageTitle: 'Page not found'});
});

module.exports = router;