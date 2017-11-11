'use strict'

const express = require('express');
const controllers = require('./../controllers');
const verifyUser = require('./../middlewares/verify-user');
const todoIdChecker = require('./../middlewares/todo-id-checker');

const router = express.Router();

router.get('/signin', controllers.User.signin);

// get all todos with 'done' property equals to false
router.get('/', verifyUser, controllers.User.readAllTodos);

// get all todos with 'done' property equals to true
router.get('/archives', verifyUser, controllers.User.readAllArchives);

router.post('/', verifyUser, controllers.User.createTodo);

router.put('/:id', verifyUser, todoIdChecker, controllers.User.updateTodo);

router.delete('/:id', verifyUser, controllers.User.deleteTodo);

module.exports = router;