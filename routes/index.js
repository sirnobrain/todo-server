'use strict'

const express = require('express');
const controllers = require('./../controllers');

const router = express.Router();

router.get('/signin', controllers.User.signin);

module.exports = router;