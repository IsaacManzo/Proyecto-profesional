import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../componentsCss/Grid.css";

const Grid = () => {
  const [casa, setCasa] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/api/users/traerAdm").then((casas) => {
      setCasa(casas.data);
    });
  }, []);

  return (
    <div>
      {casa?.map((elemento) => (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={elemento.fotos}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{elemento.titulo}</h5>
            <p className="card-text">{elemento.descripcion}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">🗺️ Ciudad: {elemento.ciudad}</li>
            <li className="list-group-item">
              🏠 Ambientes: {elemento.ambientes}
            </li>
            <li className="list-group-item">🚗 Cochera: {elemento.cochera}</li>
            <li className="list-group-item">💲 Precio: ${elemento.precio}</li>
          </ul>
          <div className="card-body">
            <button type="button" class="btn btn-info" onClick={()=>navigate(`/casa/${elemento.id}`)}>
              Info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
