const express = require('express');

// Import modular router for db notes
const dbRouter = require('./db');

const app = express();


app.use('/notes', dbRouter);


module.exports = app;
