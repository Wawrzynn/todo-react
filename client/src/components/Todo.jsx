import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

const Todo = ({ todo,  onDeleteTodo}) => {
  const handleDelete = async (todo) => {
    console.log(todo._id);
    await axios
      .delete(`http://localhost:8080/todo/todo/${todo._id}`)
      .then((response) => {
        onDeleteTodo(todo);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <li
      key={todo.id}
      className="flex flex-row items-center px-5 py-3 rounded-md shadow-md"
    >
      {todo.title}
      <button className="ml-2">
        <AiOutlineEdit />
      </button>
      <button className="ml-2" onClick={() => handleDelete(todo)}>
        <AiOutlineDelete />
      </button>
    </li>
  );
};

export default Todo;
