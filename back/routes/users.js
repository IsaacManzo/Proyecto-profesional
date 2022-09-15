const express = require("express");
const router = express.Router();

const {
  borrarCasa,
  editarCasa,
  agregarCasa,
} = require("../controllers/usersControllers");
const { validadorAdmin } = require("../config/tokens");
const{ agregarFav, borrarFav, todosFav } = require("../controllers/favoritosControllers")

// ! ADMINISTRADOR

// ? AGREGAR UNA CASA COMO ADMINISTRADOR
router.post("/agregarAdm",validadorAdmin, agregarCasa);

// ? BORRAR UNA CASA COMO ADMINISTRDOR
router.put("/borrarAdm/:id",validadorAdmin, borrarCasa);

// ? EDITAR UNA CASA COMO ADMINISTRADOR
router.put("/editarAdm/:id",validadorAdmin, editarCasa);

// ! FAVORITOS

// ? AGREGAR UNA CASA A FAVORITOS
router.post("/agregarFav/:id", agregarFav)

// ? BORRAR UN FAVORITO
router.put("/borrarFav", borrarFav)

// ? TRAER TODOS LOS FAVORITOS DE UN USUARIO
router.get("/todosFavoritos", todosFav)


module.exports = router;
