const {Router} = require('express');
const router = Router();

router.get('/api/usuarios', (req, res)=>{
    res.send('Teste de rota');
});

module.exports = router;