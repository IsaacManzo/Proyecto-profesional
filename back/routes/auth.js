const express = require("express")
const router = express.Router()
const { register } = require("../controllers/authControllers")

// ? REGISTER
router.post("/register", register);

module.exports = router;