import { useState } from "react";
import axios from "axios";

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/todo/", {
        title: newTodo,
      });

      onAddTodo(response.data); // Notify the parent about the new todo
      setNewTodo(""); // Clear the input after adding a new todo
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
