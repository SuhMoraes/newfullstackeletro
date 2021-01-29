const express = require('express');

const routes = require('./src/routes')

const server =  express();

server.use(routes)

server.listen(3333, () => {
  console.log('Servidor rodando...');
})