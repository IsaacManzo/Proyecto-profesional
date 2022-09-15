const User = require("../models/Users");
const { generadorToken, validadorToken } = require("../config/tokens");

// ? CODIGO REGISTER
const register = (req, res) => {
  User.create(req.body)
    .then((user) => {
      const payload = {
        email: user.email,
        nombre: user.nombre,
        apellido: user.apellido,
        contraseña: user.contraseña,
        administrador: user.administrador,
        numeroTelefono: user.numeroTelefono,
      };
      res.status(201).send(payload);
    })
    .catch();
};

// ? CODIGO LOGIN
const login = (req, res) => {
  const { email, contraseña } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validadorContraseña(contraseña).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        apellido: user.apellido,
        administrador: user.administrador,
        numeroTelefono: user.numeroTelefono,
      };
      const token = generadorToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
};
 
// ? CODIGO LOGOUT
const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

// ? CODIGO VALIDA QUE EL TOKEN SEA DEL USER LOGEADO
const secret = (req, res) => {
  const token = req.cookies.token;
  const { user } = validadorToken(token);
  res.send(user);
};

// ? CODIGO PERSISTE EL LOGEO DEL USER
const me = (req, res) => {
  res.sendStatus(404);
};

module.exports = { register, login, logout, secret, me };
