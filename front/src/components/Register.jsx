import React, { useState } from "react";
import axios from "axios";
import "../componentsCss/Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    const numeroTelefono = parseInt(telefono);
    axios
      .post("http://localhost:3001/api/auth/register", {
        email,
        nombre,
        apellido,
        contraseña,
        numeroTelefono,
      })
      .then((userData) => {})
      .catch();
  };

  return (
    <div className="login">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>REGÍSTRATE AQUÍ 👇</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <input
          type="tele"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <button type="submit" className="submit_btn">
          <b>E N V I A R</b>
        </button>
      </form>
    </div>
  );
};

export default Register;
