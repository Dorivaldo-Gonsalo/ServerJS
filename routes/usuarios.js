const {Router} = require('express');
const router = Router();
const controller = require('../Controllers/usuarioController');
const db = require('../db');

//GET
router.get('/api/usuarios', controller.index);

// SHOW
router.get('/api/usuarios/:id', controller.show);

//DELETE
router.delete('/api/usuarios/delete/:id', controller.delete);

//UPDATE
router.put('/api/usuarios/update/:id', controller.update);

//CREATE
router.post('/api/usuarios/create', (req, res) => {
 const {nome, email, senha, imagem} = req.body;
     db.query('INSERT INTO usuarios (nome, email, senha, imagem) VALUES (?, ?, ?, ?)',[nome, email, senha, imagem]);
     console.log( 'Usuário cadastrado');
     console.log('Novo usuário integrado no sistema');
});

module.exports = router;