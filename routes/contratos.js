const {Router} = require('express');
const router = Router();

router.get('/api/contratos', (req, res)=>{
    res.send('Teste de rota dos contratos');
});

module.exports = router;