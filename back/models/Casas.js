const S = require("sequelize");
const db = require("../db");

class Casa extends S.Model {}

Casa.init(
  {
    provincia: {
      type: S.STRING,
      allowNull: false,
    },
    ciudad: {
      type: S.STRING,
      allowNull: false,
    },
    codigoPostal: {
      type: S.INTEGER,
      allowNull: false,
    },
    precio: {
      type: S.INTEGER,
      allowNull: false,
    },
    ambientes: {
      type: S.INTEGER,
      allowNull: false,
    },
    baños: {
      type: S.INTEGER,
      allowNull: false,
    },
    habitaciones: {
      type: S.INTEGER,
      allowNull: false,
    },
    cochera: {
      type: S.INTEGER,
      allowNull: false,
    },
    metrosCuadrados: {
      type: S.INTEGER,
      allowNull: false,
    },
    fotos: {
      type: S.STRING,
      allowNull: false,
    },
    titulo: {
      type: S.STRING,
      allowNull: false,
    },
    descripcion: {
      type: S.TEXT,
      allowNull: false,
    },
    tipo: {
      type: S.STRING,
      allowNull: false,
    },
    pisos: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "casa" }
);

module.exports = Casa;
