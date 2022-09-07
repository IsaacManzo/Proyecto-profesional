const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    apellido: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    contraseña: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    salt: {
      type: S.STRING,
    },
  },
  {
    administrador: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    numeroTelefono:{
        type: S.NUMBER,
        allowNull: false
    }
  },
  // Indicamos la db y le asiganmos un nombre al modelo
  {
    sequelize: db,
    modelName: "user",
  }
);

module.exports = User;
