const express = require("express")
const router = express.Router()
const { register, login, secret, me } = require("../controllers/authControllers")
const { validadorAuth } = require("../middlewares/auth")

// ? REGISTER
router.post("/register", register);

// ? LOGIN
router.post("/login", login)

// ? SECRET
router.get("/secret", validadorAuth, secret)

router.get("/me", validadorAuth, me)

module.exports = router;