import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import Home from "./components/Home";
import AdminAgregar from "./commons/AdminAgregar"
import AdminEditar from "./commons/AdminEditar"
import Grid from "./commons/Grid"
import Casas from "./commons/Casas"

import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="grid" element={<Grid />} />        
        <Route path="casa/:id" element={<Casas />} />
        <Route path="adminAgregar" element={<AdminAgregar />}/>
        <Route path="adminEditar" element={<AdminEditar />}/>
      </Routes>
    </div>
  );
}

export default App;
