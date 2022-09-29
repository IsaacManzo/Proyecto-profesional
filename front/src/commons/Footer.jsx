import React from "react";
import "../componentsCss/Footer.css";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/home">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/register">Registrate</a>
          </li>
          <li className="list-inline-item">
            <a href="/login">Logueate</a>
          </li>
        </ul>
        <p className="copyright">Isaac Manzo © 2022</p>
      </footer> 
    </div>
  );
};

export default Footer;
