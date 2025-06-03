const db = require('../db');

  //GET 
exports.index = (req, res) => {
  db.query('select  t.id as id_usuario, t.nome as nome_usuario, t.email as email_usuario, t.imagem as imagem_usuario, t.create_at as data_registro_usuario, r.id as id_residencia, r.nome as nome_residencia, r.endereco as localizacao, r.tipo as tipo, r.valor as preco, r.status as status, r.imagem as imagem_residencia, r.create_at as data_registro_residencia, c.id AS contrato_id, u.nome AS nome_usuario, u.imagem as imagem_usuario, r.nome AS nome_residencia, r.imagem as imagem_residencia, c.pagamento, c.periodo, c.validade AS status_contrato, r.status AS status_residencia FROM usuarios t, contratos c JOIN usuarios u ON c.usuario_id = u.id JOIN residencias r ON c.residencia_id = r.id;', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
    console.log('API activada! \nA executar o SELECT MALUCO...');
  });

};

