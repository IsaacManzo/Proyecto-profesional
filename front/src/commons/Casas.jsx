import React from "react";

const Casas = () => {
  return (
    <div className="card w-100" style={{ width: "30rem" }}>
      <img
        src="http://planosycasas.net/wp-content/uploads/2015/11/Plano-de-casas-grandes-y-modernas.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">titulo</h5>
        <p className="card-text">Descripcion</p>
      </div>
      <hr></hr>
      <div class="container">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
};

export default Casas;