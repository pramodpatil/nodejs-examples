const express = require('express');

// import other routes
const usernames = require('./start').userNames;

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'user names', usernames: usernames, path: '/start'});
});

exports.router = router;