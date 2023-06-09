const express = require("express");
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Servidor activo en el puerto ${3000}`));

//Middlewares
app.use(express.json());

app.use('/', routes)