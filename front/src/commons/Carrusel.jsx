import React from "react";

const Carrusel = () => {
  return (
    <div class="w-100">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/07/28/una-villa-de-calvia-entre-las-10-casas-de-lujo-mas-buscadas-en-idealista-durante-este-verano.jpeg"
              class="d-block w-100"
              alt="No cargo la imagen"
              width="705"
              height="705"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://arquitecturaideal.com/wp-content/uploads/2015/11/Casa-moderna-a-orillas-del-Mediterr%C3%A1neo-1.jpg"
              class="d-block w-100"
              alt="No cargo la imagen"
              width="705"
              height="705"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-moderna-casa-con-piscina.jpg"
              class="d-block w-100"
              alt="No cargo la imagen"
              width="705"
              height="705"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
