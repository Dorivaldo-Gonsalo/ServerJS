const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send(
        "<h1 style='text-align:center;margin:10% 20%'> Bem-Vindo ao Sistema de gerenciamento da Relaxe.ao (SGR) </h1><br> <a href='/api/usuarios'><button>Usuários</button></a> <a href='/api/contratos'><button>Contratos</button></a> <a href='/api/residencias'><button>Residências</button></a> "
    );
    
});

module.exports = router;