//core modules
const path = require('path');

//express and other external modules
const express = require('express');
const bodyParser = require('body-parser');

// import application routes
const adminRoutes = require('./routes/admiin');
const shopRoutes = require('./routes/shop');
const pageNotFoundRoute = require('./routes/notfound');

const app = express();

//use body parser so we can parse body inall routes.
app.use(bodyParser.urlencoded({extended: false}));

//use public resources
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
// add 404 page for all other pages
app.use(pageNotFoundRoute);

app.listen(3000);