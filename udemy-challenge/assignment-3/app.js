// node module
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// imports application files
const startRoute = require('./routes/start');
const userRoute = require('./routes/users');

// user body parser to parse html files
app.use(bodyParser.urlencoded({extended: false}));

//use public resourses
app.use(express.static(path.join(__dirname, 'public')));

// use routes to server application
app.use(userRoute);
app.use(startRoute);

//listen server on port 3000
app.listen(3000);