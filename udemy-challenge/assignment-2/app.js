const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('Always run!!');
//     next();
// });

app.use('/users', (req, res, next) => {
    console.log('Users path');
    res.send('<h1>Users page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('This is starting path');
    res.send('<h1>Starter page</h1>');
});

app.listen(3000);