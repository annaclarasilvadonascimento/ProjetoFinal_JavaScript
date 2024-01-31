export default class Usuario {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.extrato = [];



        //Método para adicionar operações ao extrato
        this.adicionarOperacao = function (operacao) {
            this.extrato.push(operacao);
        };


    }
}

//Criando um usuário dinamicamente (entradas do usuario)
let nome = prompt("Preencha seu cadastro\n\nDigite seu nome:");
let idade = parseInt(prompt("Digite a sua idade"));
let email = prompt("Digite seu e-mail");

//Instanciando a classe usuário
let usuario = new Usuario(nome, idade, email);