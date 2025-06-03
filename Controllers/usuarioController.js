const db = require('../db');

//GET
exports.index = (req, res) => {
  db.query('SELECT id, nome, email, imagem FROM usuarios', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
    console.log('Lista de usuários activada!');
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
exports.post = (req, res) =>{
  const { nome, email, password, imagem } = req.body ;
  db.query('insert into usuarios (nome, email, password, imagem) values (?, ?, ?, ?)',[nome, email, password, imagem]);
  if(err) return console.log('Erro ao cadastrar usuario');
 console.log('Novo usuario cadastrado');
};

//UPDATE
exports.update = (req, res) => {
  const { nome, email, password, imagem } = req.body;
  db.query('UPDATE usuarios SET nome = ?, email = ?, password = ?, imagem = ? WHERE id = ?', 
    [nome, email, password, imagem, req.params.id], 
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(204);
    console.log('Usuario actualizado com sucesso!');
    });
};

//DELETE
exports.delete = (req, res) => {
  db.query('DELETE FROM usuarios WHERE usuarios.id = ?', [req.params.id], (err) => {
    if (err) return console.log('Erro ao apagar usuario') &&  send.status(500).send(err);
    console.log('Usuario apadado com sucesso!');
  });
};

//SEARCH
exports.search = (req, res) =>{
  const nome = req.params.nome;
  db.query('select id, nome, email, imagem from usuarios where nome like ?', 
          ['%${nome}$%'],
        (err, resultado)=>{
          if(err) return res.status(500).send(err) && console.log('Usuario não encontrado');
          res.json(resultado);
          console.log('Usuario encontrado...');
        });
}