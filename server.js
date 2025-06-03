const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const nav = require('./routes/web');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // função par consumir o ServerJS na pasta public
nav(app);


app.listen(port,(error)=>{
    if(error){
        console.log('Erro ao conectar o servidor');
        return;
    }
    console.log(`Servidor activado em http://localhost:${port}`);
});