const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send(
        "<h1 style='text-align:center;margin:10% 20%'> Bem-Vindo ao Sistema de gerenciamento da Relaxe.ao (SGR) </h1><br> <button>Usuários</button> <button>Contratos</button> <button>Residências</button> <button>Master</button>"
    );
    
});

module.exports = router;