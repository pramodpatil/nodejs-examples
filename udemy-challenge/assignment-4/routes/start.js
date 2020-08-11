// import express app
const express = require('express');

const router = express.Router();

const userNames = [];

router.get('/', (req, res, next) => {
    res.render('start', {pageTitle: 'add user name', path: '/'})
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    userNames.push({name: req.body.username});
});

exports.router = router;
exports.userNames = userNames;