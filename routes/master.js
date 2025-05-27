const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send(
        "<h1 style='text-align:center;margin:10% 20%'> Bem-Vindo ao Sistema de gerenciamento da Relaxe.ao (SGR) </h1><br> <a href='/api/usuarios'><button style='margin-left:35%;font-size:24px;'>Usuários</button></a> <a href='/api/contratos'><button style='font-size:24px'>Contratos</button></a> <a href='/api/residencias'><button style='font-size:24px'>Residências</button></a> "
    );
    
});

module.exports = router;