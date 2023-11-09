const Todo = require("../models/Todo");

exports.getTodos = async (req, res, next) => {
  Todo.find()
    .then((todos) => {
      res.status(200).json({
        message: "Todos fetched successfully!",
        todos: todos,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createTodo = async (req, res, next) => {
  const { title } = req.body;
  const todo = new Todo({
    title,
  });
  todo.save().then((result) => {
    res
      .status(201)
      .json({
        message: "Todo created successfully!",
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.title = req.body.title;
  todo.save().then((result) => {
    res
      .status(200)
      .json({
        message: "Todo updated successfully!",
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.toggleTodo = async (req, res, next) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.completed = !todo.completed;
  todo.save().then((result) => {
    res
      .status(200)
      .json({
        message: "Todo toggled successfully!",
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.deleteOne().then((result) => {
    res
      .status(200)
      .json({
        message: "Todo deleted successfully!",
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
