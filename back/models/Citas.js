const S = require("sequelize");
const db = require("../db");

class Cita extends S.Model {}

Cita.init(
  {
    fkUsuario: {
      type: S.INTEGER,
      allowNull: false,
    },
    fkCasa: {
      type: S.INTEGER,
      allowNull: false,
    },
    comentario: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "cita" }
);

module.exports = Cita;
