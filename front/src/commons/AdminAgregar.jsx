import React, { useState } from "react";
import axios from "axios";

const AdminOptions = () => {
  const [house, setHouse] = useState({
    provincia: "",
    ciudad: "",
    codigoPostal: 0,
    precio: 0,
    ambientes: 0,
    baños: 0,
    habitaciones: 0,
    cochera: 0,
    metrosCuadrados: 0,
    fotos: "",
    titulo: "",
    descripcion: "",
    tipo: "",
    pisos: 0,
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/agregarAdm", {
        ...house,
      })
      .then((casaData) => {
        return casaData.data})
      .catch();
  };
  
  const handleChange = (e) => {
    setHouse({
      ...house,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <h1>Agregar</h1>
        <div className="col-md-2">
          <label htmlFor="validationDefault01" className="form-label">
            Provincia
          </label>
          <input
            name="provincia"
            type="text"
            placeholder="Ej: Buenos Aires"
            className="form-control"
            id="validationDefault01"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault02" className="form-label">
            Ciudad
          </label>
          <input
            name="ciduad"
            type="text"
            placeholder="Ej: Necochea"
            className="form-control"
            id="validationDefault02"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault03" className="form-label">
            Codigo Postal
          </label>
          <input
            name="codigoPostal"
            type="text"
            placeholder="Ej: 7600"
            className="form-control"
            id="validationDefault03"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault04" className="form-label">
            Precio
          </label>
          <input
            name="precio"
            type="number"
            placeholder="Ej: $100000"
            className="form-control"
            id="validationDefault04"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault05" className="form-label">
            Ambientes
          </label>
          <input
            name="ambientes"
            type="number"
            placeholder="Ej: 5"
            className="form-control"
            id="validationDefault05"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault06" className="form-label">
            Baños
          </label>
          <input
            name="baños"
            type="number"
            placeholder="Ej: 2"
            className="form-control"
            id="validationDefault06"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault07" className="form-label">
            Habitaciones
          </label>
          <input
            name="habitaciones"
            type="number"
            placeholder="Ej: 2"
            className="form-control"
            id="validationDefault07"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault08" className="form-label">
            Cochera
          </label>
          <input
            name="cochera"
            type="number"
            placeholder="Ej: 1"
            className="form-control"
            id="validationDefault08"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault09" className="form-label">
            Metros Cuadrados
          </label>
          <input
            name="metrosCudrados"
            type="number"
            placeholder="Ej: 130"
            className="form-control"
            id="validationDefault09"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault10" className="form-label">
            Fotos
          </label>
          <input
            name="fotos"
            type="url"
            placeholder="Ej: http://link.com/imagen.jpg"
            className="form-control"
            id="validationDefault10"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault11" className="form-label">
            Titulo
          </label>
          <input
            name="titulo"
            type="text"
            placeholder="Ej: Casa en el centro"
            className="form-control"
            id="validationDefault11"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault12" className="form-label">
            Descripción
          </label>
          <input
            name="descripción"
            type="text"
            placeholder="Ej: Recien pintada,etc"
            className="form-control"
            id="validationDefault12"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault13" className="form-label">
            Tipo
          </label>
          <input
            name="tipo"
            type="text"
            placeholder="Ej: Casa/departamento"
            className="form-control"
            id="validationDefault13"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault13" className="form-label">
            Pisos
          </label>
          <input
            name="pisos"
            type="number"
            placeholder="Ej: 2"
            className="form-control"
            id="validationDefault13"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminOptions;
