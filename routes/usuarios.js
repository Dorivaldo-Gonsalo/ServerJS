const {Router} = require('express');
const router = Router();
const db = require('../db');

router.get('/api/usuarios', (req, res)=>{
    //res.send('Teste de rota');
    db.query(
        'select * from usuarios', (req, res)=>{
            if(error) return res.serverStatus(500).json({ erro: error.message });
            res.json(resultado);    
        });
});

module.exports = router;