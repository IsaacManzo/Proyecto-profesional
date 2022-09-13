const Casa = require("../models/Casas");

// ? AGREGAR UNA CASA
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

module.exports = { borrarCasa, editarCasa, agregarCasa };
