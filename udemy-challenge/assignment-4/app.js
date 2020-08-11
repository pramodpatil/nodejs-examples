// global apps
const path = require('path');

// import external apps
const express = require('express');
const bodyParser = require('body-parser');

//import routes
const startRoute = require('./routes/start');
const usersRouter = require('./routes/users');

const app = express();

// set view engine
app.set('view engine', 'pug');
app.set('views', 'views');

// set body parser
app.use(bodyParser.urlencoded({extended: false}));

//set public resourses 
//app.use(express.static(path.join(__dirname, 'public')));

// handle routes
app.use(usersRouter.router);
app.use(startRoute.router);

app.listen(3000);