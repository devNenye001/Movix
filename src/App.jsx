import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './pages/styles/login.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
