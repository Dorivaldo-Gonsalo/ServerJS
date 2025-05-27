function carregarUsuarios(){
    const resposta = await
        fetch('http://localhost:14477/api/usuarios'); // criando a rota de ponte
            const usuarios = resposta.json();
            const ul = document.getElementById('listaUsuarios');
            ul.innerHTML = '';
            usuarios.forEach(usuario => {
                const li = document.createElement('li');
                li.textContent = usuario.id;
                li.textContent = usuario.nome;
                li.textContent = usuario.email;
                li.textContent =usuario.telefone;
                ul.appendChild(li);
            });
}