

function Usuario(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.extrato = [];

    // Método para adicionar operações ao extrato
    this.adicionarOperacao = function (operacao) {
        this.extrato.push(operacao);
    };

    // Método para exibir os detalhes do usuário
    this.exibirDetalhes = function () {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nE-mail: ${this.email}`);
    };
}
