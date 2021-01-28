const express = require('express');
const routes = express.Router();

const produtoController =  require('../app/controllers/produtoController')
const comentariosController = require('../app/controllers/comentariosController');

routes.get('/', produtoController.listar);   

routes.post('/comentario', comentariosController.criarComentario);

routes.get('/comentario', comentariosController.listarComentario);

module.exports = routes;