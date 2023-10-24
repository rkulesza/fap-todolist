import { TodoList } from "./TodoList"
import { AddTodo } from "./AddTodo"
import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Home.css"

const Home = () => {
  //const [todos, setTodos] = useState(data);

  const [todos, setTodos] = useState( () =>{
    const localValues = localStorage.getItem("TODOS")
    if (localValues == null)  { return [] }
    return JSON.parse(localValues)
  })

  useEffect( () => {
    console.log('useEffect');
    localStorage.setItem("TODOS", JSON.stringify(todos))
  }, [todos])

   
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
      <h4 className="mb-3">Home</h4>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Home;
