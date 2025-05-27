const {Router} = require('express');
const router = Router();
const controller = require('../Controllers/usuarioController');

//GET
router.get('/api/usuarios', controller.index);

// SHOW
router.get('/api/usuarios/:id', controller.show);

//DELETE
router.delete('/api/usuarios/:id', controller.delete);

//UPDATE
router.put('/api/usuarios/:id', controller.update);

module.exports = router;