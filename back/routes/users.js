const express = require("express");
const router = express.Router();

const {
  borrarCasa,
  editarCasa,
  agregarCasa,
  traerCasas,
  agregarFav,
  borrarFav,
  todosFav,
} = require("../controllers/usersControllers");
const { validadorAdmin } = require("../config/tokens");

// ! ADMINISTRADOR
// cambiar nombre de las rutas, agregarAdm => agregar_adm
// ? AGREGAR UNA CASA COMO ADMINISTRADOR
router.post("/agregarAdm", agregarCasa);

// ? BORRAR UNA CASA COMO ADMINISTRDOR
router.put("/borrarAdm/:id", borrarCasa);

// ? EDITAR UNA CASA COMO ADMINISTRADOR
router.put("/editarAdm/:id", validadorAdmin, editarCasa);

// ? TRAER TODAS LAS CASAS
router.get("/traerAdm", traerCasas)

// ! FAVORITOS

// ? AGREGAR UNA CASA A FAVORITOS
router.put("/agregarFav/:id", agregarFav);

// ? BORRAR UN FAVORITO
router.put("/borrarFav/:id", borrarFav);

// ? TRAER TODOS LOS FAVORITOS DE UN USUARIO
router.post("/todosFav/:id", todosFav);

module.exports = router;
