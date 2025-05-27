const {Router} = require('express');
const router = Router();
const db = require('../db');

router.get('/api/residencias', (req, res)=>{
   // res.send('Teste de rota das residencias');
   db.query('select * from residencias', (req, res)=>{
    if(error) return res.serverStatus(500).json({erro: 'Erro ao pegar os dados na BD'});
    res.json(resultado)
   });
});

module.exports = router;