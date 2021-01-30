const express = require('express');

const routes = require('./src/routes');

const server =  express();

// Configurar a entrada de dados pelo corpo da requisição
server.use(express.json());
server.use(express.urlencoded({ extended: true }))

// Configurar o motor javascript no html
server.set('view engine', 'ejs');
server.set('views','./src/app/views' )

// extraimos as rotas e pedimos para o server utilizar
server.use(routes);

// criando porta do servidor
server.listen(3333, function() {
  console.log('Servidor rodando...');
});