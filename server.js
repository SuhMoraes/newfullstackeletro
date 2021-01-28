// Importa pra mim
const express = require('express');
// Executa pra mim
const server = express();

const routes = require('./src/routes');

server.use(express.json());

server.use(routes); 

server.listen(3335, function(){
  console.log('Servidor subiu!');
});