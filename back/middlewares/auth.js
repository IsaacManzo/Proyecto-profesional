const { validadorToken } = require("../config/tokens");

// ? VERIFICA SI EL TOKEN COINCIDE CON EL USUARIO
function validadorAuth(req, res, next) {
  const token = req.cookie.token;
  if (!token) return res.sendStatus(401);
  const { user } = validadorToken(token);
  if (!user) return res.sendStatus(401);
  req.user = user;
  next();
}

module.exports = { validadorAuth };
