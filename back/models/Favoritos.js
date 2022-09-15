const S = require("sequelize");
const db = require("../db");

class Favorito extends S.Model {}

Favorito.init(
  {
    fkUsuario: {
      type: S.INTEGER,
      allowNull: false,
    },
    fkCasa: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorito" }
);

module.exports = Favorito;
