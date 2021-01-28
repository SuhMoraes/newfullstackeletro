const db = require('../../config/database');
const { listar } = require('../controllers/produtoController');

module.exports = {
  criar: function (dados, callback) {
    const {nome, mensagem } = dados;

    const consulta = `
    INSERT INTO
    comentario (nome, mensagem)
    VALUES ('${nome}', '${mensagem}')`;

  db.query(consulta, function (err, resultado) {
    if(err){
      return new Error(`Erro no banco: ${err}`);
    }
    callback();
    });
  },
  listar: function (callback) {
    const consulta = 'SELECT * FROM comentario';

    db.query(consulta, function(erro, resultado){
      if(erro) {
        return new Error(`Erro no banco: ${erro}`)
      } 
      callback(resultado);
    });
  },
};

