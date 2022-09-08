const User = require("../models/Users")

const register = (req, res, next) => {
  console.log(req.body)
    User.create(req.body).then((user) => {
     // console.log(req.body)
      const payload = {
        email: user.email,
        nombre: user.nombre,
        apellido: user.apellido,
        contraseña: user.contraseña,
        administrador: user.administrador,
        numeroTelefono: user.numeroTelefono
      };
      res.status(201).send(payload);
    })
};

const login = (req, res) => {
  const cont = req.body

};

module.exports = { register }