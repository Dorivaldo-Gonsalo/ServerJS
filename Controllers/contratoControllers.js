const db = require('../db');

exports.index = (req, res) => {
  db.query('SELECT c.id AS contrato_id, u.nome AS nome_usuario, r.imagem AS imagem_residencia, c.data_inicio, c.data_fim, c.status AS status_contrato, r.status AS status_residencia FROM contratos c JOIN usuarios u ON c.usuario_id = u.id JOIN residencias r ON c.residencia_id = r.id;', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
  });
};

exports.show = (req, res) => {
  db.query('SELECT * FROM contratos WHERE id = ?', [req.params.id], (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado[0]);
  });
};
