const db = require('../../config/database');

module.exports = {
  listarProdutos: function (callback) { 

  const consulta = 'SELECT * FROM produtos';

  db.query(consulta, function(err, result) {
    if (err) {
      return new Error(`Erro no banco de dados: ${err}`);
    } 
  
    callback(result);
   }); 
  },
};