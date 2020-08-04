// node modules
const path = require('path');

//express moudule
const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'user.html'));
});

module.exports = router