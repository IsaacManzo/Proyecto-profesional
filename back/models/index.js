const Casa = require("../models/Casas")
const Cita = require("../models/Citas")
const Review = require("../models/Reviews")
const User = require("../models/Users")

// ! RELACIONES

// ? CASA
Casa.belongsToMany(User, {through: "favoritos"})
Casa.hasMany(Review)

// ? CITA


// ? REVIEW


// ? USER
User.belongsToMany(Casa, {through: "favoritos"}) // through crea una tabla en base a la relacion de users y casa, recibiendo sus respectivos ID
User.hasMany(Review)


module.exports = { Casa, Cita, Review, User }