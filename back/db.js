const Sequelize = require("sequelize");
const db = new Sequelize("proyectoProfesional", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;