const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
  return response.render('home');
});

routes.post('/perfil', async(request, response) => {
  const dados = await pegarUsuarioGithub(username);

  console.log(dados);
});

module.exports = routes;
