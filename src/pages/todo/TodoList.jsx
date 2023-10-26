import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash, faBookBookmark } from '@fortawesome/free-solid-svg-icons'

//https://fontawesome.com/search?o=r&m=free&s=solid

export function TodoList({ todos, handleDeleteTodo }) {
    const handleClick = (todo) => () => {
      handleDeleteTodo(todo);
    };
  
    return (
      <div className="row">
        <div className="col">
          <h5>Tasks</h5>
          <ul id="todos" className="list-group">
            {todos.map((todo) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={todo.id}
              >
                <span>{todo.title}</span>
                <FontAwesomeIcon icon={faTrash} onClick={handleClick(todo)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  export default TodoList;
