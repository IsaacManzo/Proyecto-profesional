const User = require("../models/Users")

const register = (req, res) => {
    User.create(req.body).then((user) => {
      const payload = {
        email: user.email,
        nombre: user.nombre,
        apellido: user.apellido,
        contraseña: user.contraseña,
        administrador: user.administrador,
        numeroTelefono: user.numeroTelefono
      };
      res.status(201).send(payload);
    }).catch()
};

module.exports = { register }