import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

const Todo = ({ todo, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);
  const inputRef = useRef(null);

  const localhostUrl = import.meta.env.VITE_LOCALHOST_URL;
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDelete = async (todo) => {
    console.log(todo._id);
    await axios
      .delete(`${localhostUrl}/todo/todo/${todo._id}`)
      .then((response) => {
        onDeleteTodo(todo);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = () => {
    setEditedTodo(todo.title);
    if (isEditing) {
      axios
        .put(`${apiUrl}/todo/todo/${todo._id}`, {
          title: editedTodo,
        })
        .then((response) => {
          console.log(response);
          onEditTodo();
          setIsEditing(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsEditing(true);
    }
  };

  const toggleCompletion = async () => {
    const updatedCompleted = !completed;
    setCompleted(updatedCompleted);
    await axios
      .put(`${apiUrl}/todo/todo/${todo._id}/toggle`, {
        completed: updatedCompleted,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    onEditTodo();
  };

  const handleKeyPress = (e) => {
    // If the key pressed is "Enter," trigger the save operation
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  const handleBlur = () => {
    if (isEditing) {
      handleEdit();
    }
  };

  return (
    <li
      key={todo.id}
      className="flex flex-row w-96 mb-5 items-center justify-between px-5 py-3 rounded-md shadow-md bg-slate-50"
    >
      <div className="flex flex-row justify-start">
        <input
          type="checkbox"
          className="mr-2"
          value={completed}
          checked={completed}
          onChange={toggleCompletion}
        />
        {isEditing ? (
          <input
            type="text"
            ref={inputRef}
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            onKeyDown={handleKeyPress}
            onClick={() => setIsEditing(true)}
            onBlur={handleBlur}
          />
        ) : (
          <p className="text-xl" onClick={() => setIsEditing(true)}>
            {todo.title}
          </p>
        )}
      </div>
      <div className="flex flex-row justify-end">
        <button className="ml-2" onClick={handleEdit}>
          <AiOutlineEdit />
        </button>
        <button className="ml-2" onClick={() => handleDelete(todo)}>
          <AiOutlineDelete className="text-red-600" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
