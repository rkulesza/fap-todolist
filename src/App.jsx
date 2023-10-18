import { TodoList } from "./pages/home/TodoList"
import { TodoNewForm } from "./pages/home/TodoNewForm"
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
