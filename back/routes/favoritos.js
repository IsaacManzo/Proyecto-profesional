const express = require("express");
const router = express.Router();

const{ agregarFav, borrarFav, todosFav } = require("../controllers/favoritosControllers")

// ? AGREGAR UNA CASA A FAVORITOS
router.post("/agregarUser", agregarFav)

// ? BORRAR UN FAVORITO
router.put("/borrarFav", borrarFav)

// ? TRAER TODOS LOS FAVORITOS DE UN USUARIO
router.get("/todosFavoritos", todosFav)

module.exports = router;