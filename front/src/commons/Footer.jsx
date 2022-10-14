import React from "react";
import "../componentsCss/Footer.css";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <button type="button" className="btn btn-outline-secondary"  href="/home">Home</button>
          </li>
          <li className="list-inline-item">
            <button type="button" className="btn btn-outline-secondary" href="/register">Registrate</button>
          </li>
          <li className="list-inline-item">
            <button type="button" className="btn btn-outline-secondary" href="/login">Logueate</button>
          </li>
          <li className="list-inline-item">
            <button type="button" className="btn btn-outline-secondary" href="/grid">Propiedades</button>
          </li>
        </ul>
        <p className="copyright pt-2">Isaac Manzo © 2022</p>
      </footer> 
    </div>
  );
};

export default Footer;
