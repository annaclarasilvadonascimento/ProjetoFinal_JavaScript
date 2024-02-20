
//teve que utilizar o function(event) para não fazer o envio tradicional do formulário, visto que o botão submit não funciona para redirecionamente de pagina em um formulario
//para isso teve que interromper o envio para redirecionar a execução de outras atividades que antecediam o envio do formulário


document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o envio tradicional do formulário

    // Lógica para redirecionamento ou outras ações
    var nomeUsuario = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Verificar se as credenciais são válidas (simulação)
    if (nomeUsuario === "usuario@teste.com" && senha === "senha123") {

        // Armazenar as informações do login do usuário no LocalStorage
        localStorage.setItem("usuarioLogado", true ) 

        // Redirecionar para a página principal
        window.location.href = ".\index.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});



//VERIFICAR SE HÁ A NECESSIDADE DE MANTER NO CÓDIGO (NÃO ESTÁ SENDO UTILIZADO NO MOMENTO)
// Função para verificar se o usuário está logado
function verificarLogin() {
    var usuarioLogado = localStorage.getItem("usuarioLogado");

    if (usuarioLogado) {
        console.log("Usuário já está logado como " + usuarioLogado);
        // Você pode redirecionar ou executar outras ações aqui
   } else {
      alert("Você não está logado. Faça o login.");
  }
}