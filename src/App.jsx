import { TodoList } from "./pages/home/TodoList"
import { AddTodo } from "./pages/home/AddTodo"
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import "./App.css"

function App(){

  const data = [
    {
      id: uuidv4(),
      title: "Learn HTML and CSS"
    },
    {
      id: uuidv4(),
      title: "Learn JavaScript"
    },
    {
      id: uuidv4(),
      title: "Learn React"
    },
    {
      id: uuidv4(),
      title: "Become a Web Developer"
    }
  ];
  const [todos, setTodos] = useState(data);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuidv4(),
        title: todo
      }
    ]);
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  return (
    <div className="container">
      <h4 className="mb-3">Main</h4>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
