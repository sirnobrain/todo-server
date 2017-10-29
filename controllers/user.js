'use strict'

const models = require('./../models');
const genResponse = require('./../helpers/generate-response');
const genJwtoken = require('./../helpers/generate-jwtoken');

class User {
	static signin(req, res) {
		models.FbUser.getNameAndId(req.headers.fb_token, req.headers.fb_id)
		.then(fbNameAndId => {
			// fbNameAndId => { id, name }
			return genJwtoken(fbNameAndId.id);
		})
		.then(jwtoken => {
			const data = {jwtoken};
			const resp = genResponse(200, `retireve token from server`, data, null);
			res.status(200).send(resp);
		})
		.catch(err => {
			const resp = genResponse(500, `failed to retrieve token from server`, null, err);
			res.status(500).send(resp);
		});
	}

	static createTodo(req, res) {
		const tags = req.body.tags ? req.body.tags.split(' ') : null;
		const todo = {
			fb_id: req.headers.user_fb_id,
			text: req.body.text,
			tags: tags
		}

		models.Todo.create(todo)
		.then(todoCreated => {
			const resp = genResponse(200, `create new todo`, todoCreated, null);
			res.status(200).send(resp);
		})
		.catch(err => {
			const resp = genResponse(500, `failed to create new todo`, null, err);
			res.status(500).send(resp);
		})
	}

	static readAllTodos(req, res) {
		models.Todo.find({fb_id: req.headers.user_fb_id}).exec()
		.then(todos => {
			const resp = genResponse(200, `retireve user ${req.headers.user_fb_id} todos`, todos, null);
			res.status(200).send(resp);
		})
		.catch(err => {
			const resp = genResponse(500, `failed to retrieve user ${req.headers.user_fb_id} todos`, null, err);
			res.status(500).send(resp);
		})
	}

	static updateTodo(req, res) {
		if (req.body.tags) req.body.tags = req.body.tags.split(' ');

		models.Todo.updateOne({fb_id: req.headers.user_fb_id, _id: req.body._id}, req.body).exec()
		.then(updated => {
			const resp = genResponse(200, `update todo with id ${req.body._id}`, updated, null);
			res.status(200).send(resp);
		})
		.catch(err => {
			const resp = genResponse(500, `failed to update todo with id ${req.body._id}`, null, err);
			res.status(500).send(resp);
		});
	}

	static deleteTodo(req, res) {
		models.Todo.deleteOne({fb_id: req.headers.user_fb_id, _id: req.body._id})
		.then(deleted => {
			const resp = genResponse(200, `delete todo with id ${req.body._id}`, deleted, null);
			res.status(200).send(resp);
		})
		.catch(err => {
			const resp = genResponse(500, `failed to delete todo with id ${req.body._id}`, null, err);
			res.status(500).send(resp);
		});
	}
}

module.exports = User;