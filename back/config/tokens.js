const jwt = require("jsonwebtoken");
const SECRET = "secretoShhh";

// ? GENERA EL TOKEN AL USUARIO QUE SE LOGUEA Y LE OTORGA EL SECRET
const generadorToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

// ? VALIDA EL TOKEN DEL USER Y LO COMPARA CON EL SECRET, EN CASO DE SER CORRECTO RETORNARA TRUE
const validadorToken = () => {
  return jwt.verify(token, SECRET);
};

// ? VALIDA QUE EL ACCIONADOR DE ESTA ACCION SEA ADMIN
function validadorAdmin(req, res, next) {
  const token = req.cookies.token;
  const check = jwt.verify(token, SECRET);
  if (check.user.administrador === true) {
    next();
  } else res.sendStatus(401);
}

module.exports = { generadorToken, validadorToken, validadorAdmin };
