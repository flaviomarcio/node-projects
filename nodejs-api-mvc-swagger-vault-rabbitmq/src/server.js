'use strict';

const consumer = require("./consumers/consumer");
const publisher = require("./clients/publisher");
const express = require("express");
const swaggerDocs = require("./config/swagger");
const vault = require("./config/vault"); // Importa o arquivo de configuração
const app = express();
const db = require("./database/db");

const routes = require("./routes/routes")

async function getSecrets() {
    try {
      const secret = await vault.read("testing/data/nodejs-secret-name");
      console.log("appenvs: "+JSON.stringify(secret.data.data)); // Os valores reais estão dentro de `data.data`
      return secret.data.data;
    } catch (error) {
      console.error("Erro ao buscar segredos:", error.message);
    }
  }
  
const appEnvs=getSecrets();

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
