const {Router} = require('express');
const router = Router();

router.get('/api/residencias', (req, res)=>{
    res.send('Teste de rota das residencias');
});

module.exports = router;