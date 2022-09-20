const Casa = require("../models/Casas")
const Cita = require("../models/Citas")
const Review = require("../models/Reviews")
const User = require("../models/Users")

// ! RELACIONES

// ? USER
User.belongsToMany(Casa, {as:"favoritos",through: "favoritos_casas"})  
User.hasMany(Review)

// ? CASA
Casa.belongsToMany(User, {as: "users",through: "favoritos_casas"})
Casa.hasMany(Review)

// ? CITA
Cita.belongsTo(User)
Cita.belongsTo(Casa)

// ? REVIEW
Review.belongsTo(User)
Review.belongsTo(Casa)

module.exports = { Casa, Cita, Review, User }