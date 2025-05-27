const db = require('../db');

exports.index = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
  });
};

exports.show = (req, res) => {
  db.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado[0]);
  });
};

exports.create = (req, res) => {
  const { nome, email, senha, imagem, role } = req.body;
  db.query('INSERT INTO usuarios (nome, email, senha, imagem, role) VALUES (?, ?, ?, ?, ?)', 
    [nome, email, senha, imagem, role], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId });
    });
};

exports.update = (req, res) => {
  const { nome, email, senha, imagem, role } = req.body;
  db.query('UPDATE usuarios SET nome = ?, email = ?, senha = ?, imagem = ?, role = ? WHERE id = ?', 
    [nome, email, senha, imagem, role, req.params.id], 
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(204);
    });
};

exports.delete = (req, res) => {
  db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};
