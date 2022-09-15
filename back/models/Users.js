const S = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../db");

class User extends S.Model {

// ? HASHEA LA CONTRASEÑA Y AGREGA UN SALT
  hash(contraseña, salt) {
    return bcrypt.hash(contraseña, salt);
  }

// ? VALIDA LA CONTRASEÑA DEL USUARIO
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
     // validate: {
     //   isEmail: true,
     // },
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
      type: S.BOOLEAN,
      defaultValue: false,
    },
    numeroTelefono: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

// ? HOOK QUE ASIGNA EL HAS DESPUES DE QUE SE REGIISTREN EN EL CLIENTE
User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user
    .hash(user.contraseña, salt)
    .then((hash) => {
      user.contraseña = hash;
    })
    .catch();
});

module.exports = User;
