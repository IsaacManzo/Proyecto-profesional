import React from "react";
import 'animate.css';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand animate__animated animate__flipInX">
          <h3><b>Antezana</b> <font color="grey">inmobiliaria</font></h3>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                <b>Home</b>
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
                <font color="grey">Propiedades</font>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/grid">
                  <font color="grey">Casa</font>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/grid">
                  <font color="grey">Duplex</font>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/grid">
                  <font color="grey">Departamento</font>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/grid">
                  <font color="grey">Oficina</font>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/grid">
                  <font color="grey">Local</font>
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
               <font color="grey">Admin</font>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/adminAgregar">
                  <font color="grey">Agregar Casa</font>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/adminEditar">
                  <font color="grey">Editar Casa</font>
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
            <button className="btn btn-outline-secondary" type="submit">
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
