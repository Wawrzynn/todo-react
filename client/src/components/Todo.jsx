const Todo = ({todo}) => {
    return (
        <li key={todo.id}>{todo.title}</li>
    );
};

export default Todo;