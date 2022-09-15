const express = require("express");
const auth = require("./auth");
const users = require("./users");
const favoritos = require("./favoritos")

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/favoritos", favoritos)

module.exports = router;
