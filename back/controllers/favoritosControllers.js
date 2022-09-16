
// ? AGREGA UN FAVORITO
const agregarFav = (req, res) => {
const userId = req.params.id
const casaId = req.body// hola asdasd qwd 
console.log(userId, casaId)
};

// ? BORRA UN FAVORITO
const borrarFav = (req, res, next) => {
    Favorito.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch(next);
  };

// ? VER TODOS LOS FAVORITOS
const todosFav = (req, res, next) => {
    Favoritos.findAll()
      .then((favorito) => res.status(200).send(favorito))
      .catch(next);
  };

module.exports = { agregarFav, borrarFav, todosFav };
