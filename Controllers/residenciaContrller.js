const db = require('../db');

exports.index = (req, res) => {
  db.query('SELECT * FROM residencias', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
  });
};

exports.show = (req, res) => {
  db.query('SELECT * FROM residencias WHERE id = ?', [req.params.id], (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado[0]);
  });
};