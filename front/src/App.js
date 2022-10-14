import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import Carrusel from "./commons/Carrusel";
import Preguntas from "./commons/Preguntas";
import AdminAgregar from "./commons/AdminAgregar"
import AdminBorrar from "./commons/AdminBorrar"
import AdminEditar from "./commons/AdminEditar"
import Grid from "./commons/Grid"
import Casas from "./commons/Casas"

import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="grid" element={<Grid />} />        
        <Route path="preguntas" element={<Preguntas />} />
        <Route path="casa" element={<Casas />} />
        <Route path="adminAgregar" element={<AdminAgregar />}/>
        <Route path="adminBorrar" element={<AdminBorrar />}/>
        <Route path="adminEditar" element={<AdminEditar />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
