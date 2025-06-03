const form = document.getElementById('formUsuario');
const lista = document.getElementById('listaUsuario');
const API_URL = 'http://localhost:3000/api/usuarios/create';


// Criar novo usuário
form.addEventListener('submit', async(e)=>{ // async declara uma função que retorna uma premise
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const imagem = document.getElementById('file').value;
    
    await fetch(API_URL, { // await espera que uma premise seja resolvida antes de continuar o processo
        method: 'post',
        headers:{'Content-Type':'application/json'}, // headers define o cabeçalho da requisição
        body:JSON.stringify({nome, email, password, imagem}) //doby:JSON.stringfy serve para converter o js para json porque o fetch não aceita objetos js
    });
    carregarUsuarios();
    form.reset();
});

//Função de redirecionamento
function red(){
const WEB_RED = 'http://localhost:3000/auth/main.html';
return WEB_RED;
}
