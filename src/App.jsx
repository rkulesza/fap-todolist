import { TodoList } from "./pages/home/TodoList"
import { TodoNewForm } from "./pages/home/TodoNewForm"
import "./App.css"
function App() {

  return (
    <>
      <div>
        <TodoNewForm/>
        <TodoList/>
      </div>
    </>
  )
}

export default App
