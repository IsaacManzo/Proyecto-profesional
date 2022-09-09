const S = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../db");

class User extends S.Model {
  hash(contraseña, salt) {
    return bcrypt.hash(contraseña, salt);
  }

  validadorContraseña(contraseña) {
    return this.hash(contraseña, this.salt).then(
      (newHash) => newHash === this.contraseña
    );
  }
}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    apellido: {
      type: S.STRING,
      allowNull: false,
    },
    contraseña: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
    administrador: {
      type: S.STRING,
      defaultValue: false,
    },
    numeroTelefono: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

// ? Hook que asigna el hash despues de que se registren en el cliente
User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user
    .hash(user.contraseña, salt)
    .then((hash) => {
      // Retornamos el usuario con el hasheo realizado
      user.contraseña = hash;
    })
    .catch();
});

module.exports = User;
