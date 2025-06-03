const db = require('../db');

//GET
exports.index = (req, res) => {
  db.query('SELECT * FROM residencias', (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado);
  });
};

//SHOW
exports.show = (req, res) => {
  db.query('SELECT * FROM residencias WHERE id = ?', [req.params.id], (err, resultado) => {
    if (err) return res.status(500).send(err);
    res.json(resultado[0]);
  });
};

//DELETE
exports.delete = (req, res) =>{
  db.query('delete from residencias where residencias.id = ?', [req.params.id], (err)=>{
    if(err) return res.status(500).send(err) && console.log('Erro ao apagar a residencia');
    console.log('Residencia apagada com sucesso!');
  });
};

//CREATE
exports.post = (req, res) =>{
  const {nome, endereco, tipo, valor, status,imagem, create_at} = req.body;
  db.query('INSERT INTO residencias (nome, endereco, tipo, valor, status, imagem, create_at) VALUES (?, ?, ?, ?, ?, ?, ?) ',
    [nome, endereco, tipo, valor, status,imagem, create_at]);
    if(err) return res.status(500).send(err) && console.log('Residencia não cadastrada');
    console.log('Residencia cadastrada com sucesso!');
};

//UPDATE
exports.put = (req, res) => {
  const {nome, endereco, tipo, valor, status,imagem, create_at} = req.body;
  db.query('update residencias set nome = ?, endereco = ?, tipo = ?, valor = ?, status = ?, imagem = ?, create_at = ? where id = ? ',
    [req.params.id], (err, resultado) => {
      if(err) return res.status(500).send(err) && console.log('Actualizaçõa não realizada devido algum erro');
      res.json(resultado);
      console.log('Actualização realizada com sucesso!');
    });
};

//SEARCH
exports.search = (req, res) =>{
  const dados = {nome, tipo, status};
  dados = req.body;
    db.query('select * from residencias where nome like ? or tipo like ? or status like ?',
      ['%${nome}$%','%${tipo}$%','%${status}$%'], (err, resultado) =>{
      if(err) return res.status(500).send(err) && console.log('Residencia não encontrada');
      res.json(resultado);
      console.log('Residencia localizada');
    });
  
}