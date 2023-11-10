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

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t._id !== todo._id));
  };

  const handleEdit = () => {
    axios
      .get("http://localhost:8080/todo/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex w-full justify-center items-center flex-col mt-10">
      <AddTodo onAddTodo={handleAddTodo} />
      <h1 className="text-6xl mt-10">Todos:</h1>
      <ul className="mt-5">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEdit}/>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
