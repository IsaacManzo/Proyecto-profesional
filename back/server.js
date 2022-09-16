const express = require("express");
const app = express();
const db = require("./db");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const cors = require("cors");
require("./models")

// ? LECTURA DE DATOS
app.use(cors());
app.use(express.json());

// ? COOKIE
app.use(cookieParser());

app.use("/api", routes);

app.get("/", function (req, res) {
  res.send("Pagina home");
});

db.sync({ force: false, }).then(() => {
  app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));
});

// * Iniciamos el servidor con Express, .sync para sincronizar la db y escuchar el servidor luego de que esta accion termine.
