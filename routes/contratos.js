const {Router} = require('express');
const router = Router();
const controller = require('../Controllers/contratoControllers');

//GET
router.get('/api/contratos', controller.index);

//SHOW
router.get('/api/contratos/:id', controller.show);


module.exports = router;