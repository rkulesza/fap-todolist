import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/NoPage";
import { HomeLayout } from "./components/HomeLayout";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/login/Login";
import TodoHome from "./pages/todo/TodoHome";
import { AuthenticatedLayout } from "./components/AuthenticatedLayout";


function RouterApp(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeLayout/>} >
            <Route index element={<HomePage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
          <Route path="/authenticated" element={<AuthenticatedLayout/>} >
            <Route index element={<HomePage/>} />
            <Route index path="todo" element={<TodoHome/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    
  )
}
export default RouterApp;
