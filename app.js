'use strict'

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index.js');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

const port = process.env.PORT || 3000;

app.listen(port, console.log(`todo server listening on port ${port}`));