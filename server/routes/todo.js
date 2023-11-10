const express = require("express");

const todosController = require("../controllers/todo");

const router = express.Router();

router.get("/", todosController.getTodos);
router.post("/", todosController.createTodo);
router.get("/todo/:id", todosController.getTodo);
router.put("/todo/:id", todosController.updateTodo);
router.put("/todo/:id/toggle", todosController.toggleTodo);
router.delete("/todo/:id", todosController.deleteTodo);

module.exports = router;