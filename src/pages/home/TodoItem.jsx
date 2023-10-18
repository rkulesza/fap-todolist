import "../../App.css"

export function TodoItem() {

    return (
      <li>
        <label>
            <input
                type="checkbox"
            />
            Titulo
        </label>
        <button className="btn btn-danger">
            -
        </button>
      </li>
    );
  }
  
  