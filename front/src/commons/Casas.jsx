import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../componentsCss/Casas.css";

const Casas = () => {
  const [casa, setCasa] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/traerUnaAdm/${id}`)
      .then((casas) => {
        setCasa(casas.data);
      }).catch()
  }, []);

const singleCasa = [casa]

  return (
    <div>
      {singleCasa?.map((elemento) => (
        <div className="container py-2">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={elemento.fotos}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">titulo</h5>
              <p className="card-text">Descripcion</p>
            </div>
            <hr></hr>
            <div>
              <ul class="list-group">
                <li class="list-group-item">Precio: {elemento.precio}</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Casas;
