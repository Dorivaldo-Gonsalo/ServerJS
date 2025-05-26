const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 14477;;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(port,(error)=>{
    if(error){
        console.log('Erro ao conectar o servidor');
        return;
    }
    console.log(`Servidor activado em http:localhost:${port}`);
});