import { TodoItem } from "./TodoItem";
import "../../App.css"

export function TodoList() {

    return (
        <ul className="list">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ul>
    );
  }
  