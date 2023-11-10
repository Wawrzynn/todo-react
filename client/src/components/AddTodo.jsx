import { useState } from "react";
import axios from "axios";

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/todo/", { title: newTodo })
      .then((response) => {
        onAddTodo(response.data);
        setNewTodo("");
      })
      .catch((error) => {
        console.log(error);
      });
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
