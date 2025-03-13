'use strict';

const express = require("express");
const swaggerDocs = require("./config/swagger");
const app = express();
const db = require("./database/db");

const routes = require("./routes/routes")

app.use(express.json());

app.use("/", routes);

swaggerDocs(app);

db.sync().then(() => { console.log("A conexão com o banco de dados foi um sucesso.")}).catch((error) => console.log(error));

const port = 3001 || 3333;
app.listen(port, () => {
    console.log("Porta rodando na: " + port);
    console.log(`Documentação disponível em http://localhost:${port}/api-docs`);
});

module.exports = app;
