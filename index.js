const express = require("express");
const routes = require("./routes")
const app = express();
const port = 3000

app.listen(port, console.log(`Servidor activo en el puerto ${3000}` ));
app.use(express.json());

app.use('/', routes)