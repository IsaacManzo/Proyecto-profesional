const { User } = require("../models");
const Casa = require("../models/Casas");

// ! ADMINISTRADOR

// ? AGREGAR UNA CASA
// no repetirse
const agregarCasa = (req, res) => {
  Casa.create(req.body)
    .then((casa) => {
      const payload = {
        provincia: casa.provincia,
        ciudad: casa.ciudad,
        codigoPostal: casa.codigoPostal,
        precio: casa.precio,
        ambientes: casa.ambientes,
        baños: casa.baños,
        habitaciones: casa.habitaciones,
        cochera: casa.cochera,
        metrosCuadrados: casa.metrosCuadrados,
        fotos: casa.fotos,
        titulo: casa.titulo,
        descripcion: casa.descripcion,
        tipo: casa.tipo,
        pisos: casa.pisos,
      };
      res.status(201).send(payload);
    })
    .catch();
};

// ? BORRAR UNA CASA
const borrarCasa = (req, res, next) => {
  Casa.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};

// ? RUTA PARA EDITAR LAS COLUMNAS DE UNA CASA
const editarCasa = (req, res, next) => {
  Casa.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then((result) => {
      const casaActualizada = result[1];
      res.json({
        message: "Se actualizo correctamente",
        casaActualizada,
      });
    })
    .catch(next);
};

// ! FAVORITOS

// ? AGREGA UN FAVORITO
const agregarFav = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      console.log("USER", user);
      Casa.findByPk(req.body.id).then((casa) => {
        console.log("CASA", casa);
        user.addFavoritos(casa);
      });
    })
    .catch((err) => console.log("ERROR", err));
  res.send({ message: "Agregado a favoritos" });
};

// ? BORRA UN FAVORITO
const borrarFav = (req, res, next) => {
  Favoritos.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};

// ? TRAE TODOS LOS FAVORITOS
const todosFav = (req, res, next) => {
  Favoritos.findAll()
    .then((favorito) => res.status(200).send(favorito))
    .catch(next);
};

module.exports = {
  agregarFav,
  borrarFav,
  todosFav,
  borrarCasa,
  editarCasa,
  agregarCasa,
};
