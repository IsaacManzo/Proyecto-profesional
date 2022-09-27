import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import Home from "./components/Home";

import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
