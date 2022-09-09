const jwt = require("jsonwebtoken")
const SECRET  = "secretoShhh"

const generadorToken = (payload) => {
const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" })
return token
}

const validadorToken = () => {
    return jwt.verify(token, SECRET);
}

module.exports = { generadorToken, validadorToken}