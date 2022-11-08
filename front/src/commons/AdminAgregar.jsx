import React, { useState } from "react";
import axios from "axios";

const AdminOptions = () => {
  const [house, setHouse] =({
    titulo:"",
    descripcion:"",
    provincia:"",
    ciudad:"",
    codigoPostal:0,
    precio:0,
    ambientes:1,
    baños:1,
    habitaciones:0,
    cochera:0,
    metrosCuadrados:0,
    fotos:"",
    tipo:"",
    pisos:0,
  }) 
  
  const handleSubmit = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/agregarAdm", {
       ...house,
      })
      .then((casaData) => {})
      .catch();
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
            type="text"
            className="form-control"
            id="validationDefault01"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault02" className="form-label">
            Ciudad
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault03" className="form-label">
            Codigo Postal
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault04" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault04"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault05" className="form-label">
            Ambientes
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault05"
            value={ambientes}
            onChange={(e) => setAmbientes(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault06" className="form-label">
            Baños
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault06"
            value={baños}
            onChange={(e) => setBaños(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault07" className="form-label">
            Habitaciones
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault07"
            value={habitaciones}
            onChange={(e) => setHabitaciones(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault08" className="form-label">
            Cochera
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault08"
            value={cochera}
            onChange={(e) => setCochera(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault09" className="form-label">
            Metros Cuadrados
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault09"
            value={metrosCuadrados}
            onChange={(e) => setMetrosCuadrados(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault10" className="form-label">
            Fotos
          </label>
          <input
            type="url"
            className="form-control"
            id="validationDefault10"
            value={fotos}
            onChange={(e) => setFotos(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault11" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault11"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault12" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault12"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault13" className="form-label">
            Tipo
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault13"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault13" className="form-label">
            Pisos
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault13"
            value={pisos}
            onChange={(e) => setPisos(e.target.value)}
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
