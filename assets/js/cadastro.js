// Defina a função cadastrarUsuario fora do evento submit
function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const mensagemErro = document.getElementById("mensagem");

    if (idade < 18) {
        mensagemErro.innerHTML = "Idade não suficiente. Você deve ter pelo menos 18 anos. <a href=' index.html'>Clique aqui</a>";
        return;
    }

        //document.getElementById("nome").disabled = true;
        //document.getElementById("idade").disabled = true;
        //document.getElementById("email").disabled = true;
        //document.getElementById("senha").disabled = true;

       

    let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o usuário já está cadastrado
    if (usuariosCadastrados.some(usuario => usuario.nome === nome)) {
        mensagemErro.innerHTML = "Usuário já cadastrado.";
        return;
    }

    // Adiciona novo usuário ao vetor
    usuariosCadastrados.push({ nome, senha, idade, email });

    // Atualiza o Local Storage com os usuários cadastrados
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

    mensagemErro.innerHTML = "Usuário cadastrado com sucesso.";
    console.log("Usuário cadastrado com sucesso!");

}

// Adiciona o ouvinte de evento submit
document.getElementById("registerForm").addEventListener("submit", function(event) {
    //event.preventDefault(); // Evitar o envio tradicional do formulário

    // Chama a função cadastrarUsuario dentro do evento submit
    cadastrarUsuario();
});


