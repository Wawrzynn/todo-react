const Todo = require("../models/Todo");

exports.getTodos = async (req, res, next) => {
  Todo.find()
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createTodo = async (req, res, next) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
    newTodo.save()
    .then((result) => {
      res.status(201).json(newTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.title = req.body.title;
  todo
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Todo updated successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.toggleTodo = async (req, res, next) => {
  const todoRef = await Todo.findById(req.params.id);
  Todo.findOneAndUpdate({ _id: req.params.id }, { done: !todoRef.done })
    .save()
    .then((todo) => {
      res.status(200).json(todo);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTodo = async (req, res, next) => {
  Todo.findById(req.params.id)
    .deleteOne()
    .then((result) => {
      res.status(200).json({
        message: "Todo deleted successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
