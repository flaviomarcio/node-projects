'use strict';

const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");
const addUserController = require("../controllers/addUserController");
const editUserController = require("../controllers/editUserController");
const deleteUserController = require("../controllers/deleteUserController");
const findUserByIdController = require("../controllers/findUserByIdController");


//index ou busca todos os users
router.get("/", indexController.renderPage);

//adiciona user
router.post("/adduser", addUserController.addUser);

//edita user
router.put("/edituser/:userId", editUserController.editUser);

//deleta user
router.delete("/deleteuser/:userId", deleteUserController.deleteUser);

/**
 * @swagger
 * /user/{userId}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     description: Busca um usuário específico com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário a ser retornado
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: João Silva
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/user/:userId", findUserByIdController.renderUserById);

module.exports = router;

