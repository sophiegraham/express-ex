const express = require('express');
const app = express();
const tweets = require('./routes/tweets');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');

// app.use(('morgan')('dev'));

app.use(express.json());
app.use('/tweets', tweets);

app.use(notFound);

app.use(handler);


module.exports = app;
