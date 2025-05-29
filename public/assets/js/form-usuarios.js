const { application, response } = require("express");

document.getElementById('usuarioForm').addEventListener('submit', function(e){
    e.preventDefault();
    const dados = {
        nome:document.getElementById('nome').value,
        email:document.getElementById('email').value,
        senha:document.getElementById('senha').value,
        imagem:document.getElementById('imagem').value
    };
    fetch('http://localhost:14477/api/usuarios/create',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(response =>{
        if(response.ok){
            console.log('Sucesso com o novo usuário');
            alert('Sucesso!');
            this.reset();
        } else{
            console.log('Erro ao cadastrar usuario');
        }
    });
});