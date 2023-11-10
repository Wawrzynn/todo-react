import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai";
import { useState } from "react";

const Todo = ({todo}) => {
    

    
    return (
        <li key={todo.id} className="flex flex-row items-center px-5 py-3 rounded-md shadow-md">
            {todo.title}
            <AiOutlineEdit className="ml-2" />
            <AiOutlineDelete className="ml-2" />
            </li>
    );
};

export default Todo;