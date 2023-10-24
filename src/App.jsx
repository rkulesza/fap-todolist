import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/NoPage";

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="profile" element={<Profile/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
