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

app.listen(3000, console.log('todo server listening on port 3000 :)'));