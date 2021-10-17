const express = require('express');
const cors = require('Cors');
const bodyParser = require('body-parser');

const app = express();

const usersRoute = require('./routes/user');

app.use(bodyParser.json());

app.use('/users', usersRoute);


module.exports = app;
