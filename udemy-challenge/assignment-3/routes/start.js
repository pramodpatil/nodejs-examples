//node modules
const path = require('path');

//express app
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.send('<h1>This is just an example.</h1>');
    res.sendFile(path.join(__dirname, '..', 'views', 'start.html'));
});

module.exports = router;
