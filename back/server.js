const express = require("express")
const app = express()
const db = require("./db")

const cors = require("cors")

app.use(
    cors({
      origin: "http://localhost:3000",
    //  credentials: true,
    //  optionSuccessStatus: 200,
    })
  );

app.use(express.json())

app.get("/", function (req, res){
    res.send("Pagina home")
})


db.sync({ force: false }).then(() => {
    console.log("Se conecto bien la db");
    app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));
  });

// * Iniciamos el servidor con Express, .sync para sincronizar la db y escuchar el servidor luego de que esta accion termine.