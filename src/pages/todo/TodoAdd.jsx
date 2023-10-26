import "../../App.css"
import {useState} from 'react'

export function TodoAdd({handleAddTodo}) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    const text = todo.trim();

    if (!text) {
      return;
    }

    setTodo("");

    handleAddTodo(text);
  };

  return (
    <div className="row mb-3">
      <div className="col mb-3">
        <div className="d-flex">
          <input
            onChange={handleChange}
            type="text"
            placeholder="add item"
            id="new-todo"
            className="form-control mr-2"
            value={todo}
          />
          <button id="add-btn" className="btn btn-primary" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoAdd;



