const mysql = require('mysql2');

const conexao = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'sg-relaxe'

});

module.exports = conexao.promise();