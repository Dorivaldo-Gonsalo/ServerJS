const db = require('../db');

//GET
exports.index = (req, res) => {
  db.query('SELECT id, nome, email, imagem FROM usuarios', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
  });
};

//SHOW
exports.show = (req, res) => {
  db.query('SELECT id, nome, email, imagem  FROM usuarios WHERE id = ?', [req.params.id], (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado[0]);
  });
};

//CREATE
/*
exports.create = (req, res) => {
  const { nome, email, senha, imagem} = req.body;
  db.query('INSERT INTO usuarios (nome, email, senha, imagem) VALUES ( ?, ?, ?, ?)', 
    [nome, email, senha, imagem], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId });
    });
};*/

//UPDATE
exports.update = (req, res) => {
  const { nome, email, senha, imagem, role } = req.body;
  db.query('UPDATE usuarios SET nome = ?, email = ?, senha = ?, imagem = ?, role = ? WHERE id = ?', 
    [nome, email, senha, imagem, role, req.params.id], 
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(204);
    });
};

//DELETE
exports.delete = (req, res) => {
  db.query('DELETE FROM usuarios WHERE usuarios.id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
    console.log('Sucesso!');
  });
};
