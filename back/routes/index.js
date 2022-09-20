const express = require("express");
const auth = require("./auth");
const users = require("./users");
const reviews = require("./reviews")

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/reviews", reviews);


module.exports = router;
