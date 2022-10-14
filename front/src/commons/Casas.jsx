import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../componentsCss/Casas.css";

const Casas = () => {
  return (
    <div className="container py-2">
      <div className="card" style={{ width: "30rem" }}>
        <img
          src="https://picsum.photos/400/300"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">titulo</h5>
          <p className="card-text">Descripcion</p>
        </div>
        <hr></hr>
        <div>
          <ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Casas;