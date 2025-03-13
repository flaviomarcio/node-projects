const vault = require("node-vault")({
    apiVersion: "v1", // Versão da API do Vault
    endpoint: "http://127.0.0.1:8200", // URL do Vault
    token: process.env.VAULT_TOKEN, // Token de autenticação do Vault
});

module.exports = vault;
