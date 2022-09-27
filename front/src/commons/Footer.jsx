import React from "react";
import "../componentsCss/Footer.css";

const Footer = () => {
  return (
    <div class="footer-basic m-4">
      <footer>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p class="copyright">Company Name © 2018</p>
      </footer>
    </div>
  );
};

export default Footer;
