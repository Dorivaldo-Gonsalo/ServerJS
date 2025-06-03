const {Router} = require('express');
const router = Router();
const controller = require('../Controllers/contratoControllers');

//GET
router.get('/api/contratos', controller.index);

//SHOW
router.get('/api/contratos/:id', controller.show);

//CREATE
router.post('/api/contratos/create', controller.post);

//UPDATE
router.put('/api/contratos/update/:id', controller.put);

//SEARCH
router.get('/api/contratos/seach/:nome', controller.search);


module.exports = router;