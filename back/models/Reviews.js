const S = require("sequelize");
const db = require("../db");

class Review extends S.Model {}

Review.init(
  {
    reviews: {
      type: S.TEXT,
      allowNull: false,
    },
   //rating: {
   //   type: S.FLOAT,
   //   validate: {
   //     min: 0,
   //     max: 10,
   //   },
   //   defaultValue: 0,
   // ,
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Review;