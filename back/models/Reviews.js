const S = require("sequelize");
const db = require("../db");

class Review extends S.Model {}

Review.init(
  {
    fkUsuario: {
      type: S.INTEGER,
      allowNull: false,
    },
    fkCasa: {
      type: S.INTEGER,
      allowNull: false,
    },
    reviews: {
      type: S.TEXT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Review;
