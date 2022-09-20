const Reviews = require("../models/Reviews");

// ? AGREGAR UNA REVIEW
const agregarRev = (req, res, next) => {
  console.log(req.body)
  Reviews.create(req.body)
    .then(() => res.send({message: "La review se agrego correctamente"}))
    .catch(next);
};

// ? BORRAR UNA REVIEW
const borrarRev = (req, res, next) => {
  Reviews.destroy({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) res.sendStatus(404);
      res.send({message: "La review se borro correctamente"});
    })
    .catch(next);
};

// ? TRAER TODAS LAS REVIEWS
const todosRev = (req, res, next) => {
    Reviews.findAll()
      .then((reviews) => res.status(200).send(reviews))
      .catch(next);
  };  

module.exports = { agregarRev, borrarRev, todosRev };