import "../../App.css";

export function TodoList({ todos, handleDeleteTodo }) {
    const handleClick = (todo) => () => {
      handleDeleteTodo(todo);
    };
  
    return (
      <div className="row">
        <div className="col">
          <h5>Tarefas</h5>
          <ul id="todos" className="list-group">
            {todos.map((todo) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={todo.id}
              >
                <span>{todo.title}</span>
                <i className="delete fa fa-trash" onClick={handleClick(todo)}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  export default TodoList;
