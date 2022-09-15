const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  secret,
  me,
} = require("../controllers/authControllers");
const { validadorAuth } = require("../middlewares/auth");

// ! REGISTRO

// ? REGISTER
router.post("/register", register);

// ? LOGIN
router.post("/login", login);

// ? LOGOUT
router.post("/logout", logout);

// ? SECRET VALIDAR USER
router.get("/secret", validadorAuth, secret);

// ? ME PERSISTENCIA
router.get("/me", validadorAuth, me);

module.exports = router;
