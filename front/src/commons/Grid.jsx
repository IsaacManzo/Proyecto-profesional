import {React, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../componentsCss/Grid.css";
import { useSelector, useDispatch } from "react-redux";
import { getHouse } from "../store/house"

const Grid = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const house = useSelector((state) => {return state.house.houses});

  useEffect(() => {
    dispatch(getHouse())
  }, [dispatch])
  
  const handleSubmit = function (id) {
    console.log(id)
    axios
    .put(`http://localhost:3001/api/users/borrarAdm/${id}`)
    .then((res) => res.status)
    .catch((err) => console.log(err));
  };
  
console.log('HOSE-GRID',house)

  return (
    <div>
      {house?.map((elemento) => (
        <div className="card" style={{ width: "18rem" }} key={elemento.id}>
          <img src={elemento.fotos} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{elemento.titulo}</h5>
            <p className="card-text">{elemento.descripcion}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">πΊοΈ Ciudad: {elemento.ciudad}</li>
            <li className="list-group-item">
              π  Ambientes: {elemento.ambientes}
            </li>
            <li className="list-group-item">π Cochera: {elemento.cochera}</li>
            <li className="list-group-item">π² Precio: ${elemento.precio}</li>
          </ul>
          <div className="buttons-card">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => navigate(`/casa/${elemento.id}`)}
            >
              Info
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => handleSubmit(elemento.id)}
            >
              Borrar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
