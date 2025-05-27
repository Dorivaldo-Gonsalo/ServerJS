const {Router} = require('express');
const router = Router();
const db = require('../db');

router.get('/api/contratos', (req, res)=>{
   // res.send('Teste de rota dos contratos');
    db.query('select * from contratos', (req, res)=>{
        if(error) return res.serverStatus(500).json({erro: 'Falha a pegar os dados na BD'});
        res.json(resultado);
    });
});

module.exports = router;