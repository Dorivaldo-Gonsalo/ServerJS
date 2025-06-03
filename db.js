const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'sgr'

});

conexao.connect(error =>{
    if(error){
        console.log('Erro ao conectar com o banco de dados');
        return;
    }
    console.log('Conexão com a dase de dados bem sucedida!');
})

module.exports = conexao;