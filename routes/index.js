'use strict'

const express = require('express');
const controllers = require('./../controllers');
const verifyUser = require('./../middlewares/verify-user');
const todoIdChecker = require('./../middlewares/todo-id-checker');

const router = express.Router();

router.get('/signin', controllers.User.signin);

router.get('/', verifyUser, controllers.User.readAllTodos);

router.post('/', verifyUser, controllers.User.createTodo);

router.put('/', verifyUser, todoIdChecker, controllers.User.updateTodo);

router.delete('/', verifyUser, todoIdChecker, controllers.User.deleteTodo);

module.exports = router;