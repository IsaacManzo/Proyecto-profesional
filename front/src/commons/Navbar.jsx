import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/preguntas">
          ProyectoIntegrador
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Propiedades
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/grid">
                    Casas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/casa">
                    Casa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/adminAgregar">
                    Agregar casa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/adminBorrar">
                    Borrar casa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/adminEditar">
                    Editar casa
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="¿Qué desea buscar?"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
          <ul></ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
