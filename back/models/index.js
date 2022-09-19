const Casa = require("../models/Casas")
const Cita = require("../models/Citas")
const Review = require("../models/Reviews")
const User = require("../models/Users")

// ! RELACIONES

// ? CASA
Casa.belongsToMany(User, {through: "favoritos"}) // * through: crea una tabla en base a la relacion de users y casa, recibiendo sus respectivos ID
Casa.hasMany(Review)

// ? CITA
Cita.belongsTo(User)
Cita.belongsTo(Casa)

// ? REVIEW
Review.belongsTo(User)
Review.belongsTo(Casa)

// ? USER
User.belongsToMany(Casa, {through: "favoritos"}) // * through: crea una tabla en base a la relacion de users y casa, recibiendo sus respectivos ID
User.hasMany(Review)

module.exports = { Casa, Cita, Review, User }