'use strict'

const FbUser = require('./fb-user');
const Todo = require('./todo');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds053894.mlab.com:53894/todo-fancy`);
mongoose.Promise = global.Promise;

module.exports = { FbUser, Todo };