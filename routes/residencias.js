const {Router} = require('express');
const router = Router();
const controller = require('../Controllers/residenciaContrller');

//GET
router.get('/api/residencias', controller.index);

//SHOW
router.get('/api/residencias/:id', controller.show);

//CREATE
router.post('/api/residencias/create', controller.post);

//UPDATE
router.put('/api/residencias/update/:id', controller.put);

//SEARCH
router.get('/api/residencias/search/:dados', controller.search);

module.exports = router;