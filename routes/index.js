'use strict'

const express = require('express');
const controllers = require('./../controllers');
const verifyUser = require('./../middlewares/verify-user');

const router = express.Router();

router.get('/signin', controllers.User.signin);

router.get('/', verifyUser, controllers.User.readAllTodos);

router.post('/', verifyUser, controllers.User.createTodo);

router.put('/', verifyUser, controllers.User.updateTodo);

router.delete('/', verifyUser, controllers.User.deleteTodo);

module.exports = router;