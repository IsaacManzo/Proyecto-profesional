const express = require("express");
const router = express.Router();

const {
  borrarCasa,
  editarCasa,
  agregarCasa,
} = require("../controllers/usersControllers");
const { validadorAdmin } = require("../config/tokens");

// ? AGREGAR UNA CASA COMO ADMINISTRADOR
router.post("/agregarAdm",validadorAdmin, agregarCasa);

// ? BORRAR UNA CASA COMO ADMINISTRDOR
router.put("/borrarAdm/:id",validadorAdmin, borrarCasa);

// ? EDITAR UNA CASA COMO ADMINISTRADOR
router.put("/editarAdm/:id",validadorAdmin, editarCasa);

module.exports = router;
