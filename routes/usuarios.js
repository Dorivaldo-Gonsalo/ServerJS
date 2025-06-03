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
router.post('/api/usuarios/create', controller.post );

//SEARCH
router.get('/api/usuarios/serach/:nome', controller.search);

module.exports = router;