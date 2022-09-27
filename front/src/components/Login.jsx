import React, { useState } from "react";
import axios from "axios";
import "../componentsCss/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/register", {
        email,    
        contraseña,
      })
      .then((userData) => {
        if (userData) {
        }
      })
      .catch();
  };
  return (
    <div className="login">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>INICIA SESIÓN AQUÍ 👇</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button type="submit" className="submit_btn">
          <b>E N V I A R</b>
        </button>
      </form>
    </div>
  );
};

export default Login;
