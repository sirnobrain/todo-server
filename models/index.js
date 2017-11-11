'use strict'

const FbUser = require('./fb-user');
const Todo = require('./todo');

const mongoose = require('mongoose');
const URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds053894.mlab.com:53894/todo-fancy`;
const options = { useMongoClient: true }
mongoose.connect(URI, options);
mongoose.Promise = global.Promise;

module.exports = { FbUser, Todo };