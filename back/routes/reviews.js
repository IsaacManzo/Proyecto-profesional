const express = require("express");
const router = express.Router();

const {
  agregarRev,
  borrarRev,
  todosRev,
} = require("../controllers/reviewControllers");

// ! REVIEWS

// ? AGREGAR REVIEWS
router.post("/agregar_rev", agregarRev);

// ? BORRAR REVIEWS
router.put("/borrar_rev/:id", borrarRev);

// ? TRAER TODOS REVIEWS
router.get("/todos_rev", todosRev);

module.exports = router;
