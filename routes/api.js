const { Router } = require("express");
const router = Router();
const controller = require('../Controllers/apiControllers');

//GET
router.get('/api', controller.index);



module.exports = router;