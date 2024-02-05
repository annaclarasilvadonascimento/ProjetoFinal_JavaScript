

// Entradas do usuário
let nome = prompt("Preencha seu cadastro\n\nDigite seu nome:");
let idade = parseInt(prompt("Digite a sua idade"));
let email = prompt("Digite seu e-mail");

// Criando o objeto usuário
let usuario = new Usuario(nome, idade, email);

let valor = prompt("Informe o valor que deseja converter");

// Criando o objeto ValorAconverter
let valorAConverter = new ValorAconverter(valor);
valorAConverter.impostoIOF();

// Loop para exibir o menu e processar a escolha do usuário
let escolha = 0;

do {
    exibirMenu();
    escolha = parseInt(prompt("Digite o número da opção desejada:"));

    // Verifica se a escolha é um número válido
    if (isNaN(escolha)) {
        console.log("Por favor, digite um número válido");
        continue;
    }

    processarEscolha(escolha, valor, usuario);
} while (escolha !== 5);
