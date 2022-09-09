const User = require("../models/Users");
const { generadorToken, validadorToken } = require("../config/tokens");
const router = require("../routes");

const register = (req, res) => {
  User.create(req.body)
    .then((user) => {
      console.log(user);
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

// ? Valida que el token sea del user logueado
const secret = (req, res) => {
  const token = req.cookies.token;
  const { user } = validadorToken(token);
  res.send(user);
};

const me = (req, res) =>{
  res.sendStatus(404)
}

module.exports = { register, login, secret, me };
