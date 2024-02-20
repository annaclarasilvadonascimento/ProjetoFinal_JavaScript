
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o envio tradicional do formulário

    var idade = document.getElementById("idade").value;
    idade = parseInt(idade);

    if (idade < 18) {
        document.getElementById("mensagem").innerHTML = "Idade não suficiente. Você deve ter pelo menos 18 anos. <a href='./index.html'>Clique aqui</a>.";

        document.getElementById("nome").disabled = true;
        document.getElementById("idade").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("senha").disabled = true;
    } else {
        document.getElementById("mensagem").innerHTML = "Já tem conta, faça login.";
        document.getElementById("nome").disabled = false;
        document.getElementById("idade").disabled = false;
        document.getElementById("email").disabled = false;
        document.getElementById("senha").disabled = false;

        alert("Conta Criada Com Sucesso");
    }
});

