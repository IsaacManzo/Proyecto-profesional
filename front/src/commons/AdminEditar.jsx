import React from 'react'

const AdminEditar = () => {
  return (
    <div>
    <form className="row g-3">
      <h1>Editar</h1>
      <div className="col-auto">
        <label htmlFor="staticEmail2" className="visually-hidden">
          Email
        </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="staticEmail2"
          value="        EDITAR POR ID"
        />
      </div>
      <div className="col-auto">
        <label htmlFor="inputPassword2" className="visually-hidden">
          id
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="id"
        />
      </div>
      <div className="col-auto">
        <label htmlFor="staticEmail2" className="visually-hidden">
          Email
        </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="staticEmail2"
          value="        QUE DESEA EDITAR"
        />
      </div>
      <div className="col-auto">
        <label htmlFor="inputPassword2" className="visually-hidden">
          id
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="propiedad"
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Editar
        </button>
      </div>
    </form>
  </div>
  )
}

export default AdminEditar