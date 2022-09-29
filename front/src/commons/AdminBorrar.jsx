import axios from "axios";
import React, { useState } from "react";

const AdminBorrar = () => {
  const [idCasa, setIdCasa] = useState(0);

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(idCasa)
    axios
      .put(`http://localhost:3001/api/users/borrarAdm/${idCasa}`)
      .then((casaData) => {})
      .catch();
  };

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <h1>Borrar</h1>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            id
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPassword2"
            placeholder="id"
            value={idCasa}
            onChange={(e) => setIdCasa(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Borrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBorrar;
