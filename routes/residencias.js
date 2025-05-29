const {Router} = require('express');
const router = Router();
const controller = require('../Controllers/residenciaContrller');

//GET
router.get('/api/residencias', controller.index);

//SHOW
router.get('/api/residencias/:id', controller.show);

module.exports = router;