const db = require('../db');

//GET
exports.index = (req, res) => {
  db.query('SELECT c.id AS contrato_id, u.nome AS nome_usuario, u.imagem as imagem_usuario, r.nome AS nome_residencia, r.imagem as imagem_residencia, c.pagamento, c.periodo, c.validade AS status_contrato, r.status AS status_residencia FROM contratos c JOIN usuarios u ON c.usuario_id = u.id JOIN residencias r ON c.residencia_id = r.id;', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
     console.log('Lista de contratos activada!');
  });
};

//SHOW
exports.show = (req, res) => {
  db.query('SELECT c.id AS contrato_id, u.nome AS nome_usuario, u.imagem as imagem_usuario, r.nome AS nome_residencia, r.imagem as imagem_residencia, c.pagamento, c.periodo, c.validade AS status_contrato, r.status AS status_residencia FROM contratos c JOIN usuarios u ON c.usuario_id = u.id JOIN residencias r ON c.residencia_id = r.id WHERE c.id = ?', [req.params.id], (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado[0]);
  });
};

//DELETE
exports.delete = (req, res)=>{
db.query('delete from contratos where contratos.id = ?',[req.params.id], (err) =>{
  if(err) return res.status(500).send(err);
  console.log('contrato apagado com suceso!');
});
};

//CREATE
exports.post = (req, res) =>{
  const {usuario_id, residencia_id, pagamento, periodo, validade, create_at} = req.body;
  db.query('INSERT INTO contratos ( usuario_id, residencia_id, pagamento, periodo, validade, create_at) VALUES( ?, ?, ?, ?, ?, ?)', 
          [usuario_id, residencia_id, pagamento, periodo, validade, create_at]);
    if(err) return res.status(500).send(err);
    res.json({message:'Cadastro de novo contrato bem sucedido'});
    console.log('Novo contrado registrado com sucesso');
};
//UPDATE
exports.put = (req, res) =>{
    const {usuario_id, residencia_id, pagamento, periodo, validade, create_at} = req.body;
    db.query('update contratos set usuario_id = ?, residencia_id = ?, pagamento = ?, periodo = ?, validade = ?, create_at = ?',
            [usuario_id, residencia_id, pagamento, periodo, validade, create_at, req.params.id]);
      if(err) return res.status(500).send(err);
      res.json({message:'Novo contrato registrado'});
      console.log('Novo contrato registrado');
}
//SEARCH
exports.search = (req, res) =>{
  const nome = req.params.nome;
  db.query('SELECT c.id AS contrato_id, u.nome AS nome_usuario, u.imagem as imagem_usuario, r.nome AS nome_residencia, r.imagem as imagem_residencia, c.pagamento, c.periodo, c.validade AS status_contrato, r.status AS status_residencia FROM contratos c JOIN usuarios u ON c.usuario_id = u.id JOIN residencias r ON c.residencia_id = r.id WHERE u.nome like ?', 
    ['%${nome}$%'], (err, resultado) =>{
      if(err) return res.status(500).send(err) && console.log('Contrato não encontrado');
      res.json(resultado);
      console.log('Contrato encontrado');
    });
}