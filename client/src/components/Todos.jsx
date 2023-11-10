import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";
import AddTodo from "./AddTodo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = () => {
      axios
        .get("http://localhost:8080/todo/")
        .then((response) => {
          setTodos(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    };
    fetchTodos();
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex w-full justify-center items-center flex-col mt-10">
      <h1 className="text-6xl">Todos:</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul className="mt-5">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
