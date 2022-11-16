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
      })
      .catch();
  }, [id]);

  const singleCasa = [casa];

  return (
    <div>
      {singleCasa?.map((elemento) => (
        <div className="container py-2">
          <div className="card" style={{ width: "30rem" }} key={elemento.id}>
            <img src={elemento.fotos} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{elemento.titulo}</h5>
              <p className="card-text">{elemento.descripcion}</p>
              <div>
              <div>
                <div className="row py-2">
                  <div className="col-sm-6">Precio: ${elemento.precio}</div>
                  <div className="col-sm-6">Ambientes: {elemento.ambientes}</div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-6">Baños: {elemento.baños}</div>
                  <div className="col-sm-6">Habitaciones: {elemento.habitaciones}</div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-6">Cochera: {elemento.cochera}</div>
                  <div className="col-sm-6">Metros cuadrados: {elemento.metrosCuadrados} m²</div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-6">Tipo: {elemento.tipo}</div>
                  <div className="col-sm-6">Plantas: {elemento.pisos}</div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-6">Provincia: {elemento.provincia}</div>
                  <div className="col-sm-6">Ciudad: {elemento.ciudad}</div>
                </div>
                <div className="row py-2">
                  <div className="col-xs-12">Codigo postal: {elemento.codigoPostal}</div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Casas;
