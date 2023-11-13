import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";
import AddTodo from "./AddTodo";
import Button from "./Button";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

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
  }, [todos]);

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      
      return todo;
    }
    if (filter === "completed") {
      
      return todo.completed === true;
    }
    if (filter === "active") {
      
      return todo.completed === false;
    }
  });

  return (
    <div className="flex w-full justify-center items-center flex-col mt-10">
      <AddTodo onAddTodo={handleAddTodo} />
      <div className="flex flex-row justify-around w-96 items-center px-5 py-3 rounded-md shadow-md">
        <Button onClick={() => {setFilter("all");}}>All</Button>
        <Button onClick={() => setFilter("completed")}>Completed</Button>
        <Button onClick={() => setFilter("active")}>Active</Button>
      </div>
      <h1 className="text-6xl mt-10 mb-10">Todos:</h1>
      <ul className="flex mb-10 justify-center items-center flex-col px-10 py-5 rounded-md shadow-md bg-cyan-300">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
