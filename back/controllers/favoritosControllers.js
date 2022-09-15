const Favorito = require("../models/Favoritos");

// ? AGREGA UN FAVORITO
const agregarFav = (req, res) => {
    console.log("req.body")
  Favorito.create(req.body)
    .then((favorito) => {
      const payload = {
        fkUsuario: favorito.fkUsuario,
        fkCasa: favorito.fkCasa,
      };
      res.status(201).send(payload);
    })
    .catch();
};

// ? BORRA UN FAVORITO
const borrarFav = (req, res, next) => {
    Favorito.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch(next);
  };

// ? VER TODOS LOS FAVORITOS
const todosFav = (req, res, next) => {
    Favoritos.findAll()
      .then((favorito) => res.status(200).send(favorito))
      .catch(next);
  };

module.exports = { agregarFav, borrarFav, todosFav };
