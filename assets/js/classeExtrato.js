export class Extrato {
    constructor() {
        this.transacoes = [];
    }

    adicionarTransacao(descricao, valor, moeda, convertido, desconto, valorComDesconto) {
        this.transacoes.push({
            descricao,
            valor,
            moeda,
            convertido,
            desconto,
            valorComDesconto,
            data: new Date().toLocaleString(),
        });
    }

    gerarExtrato() {
        return this.transacoes;
    }
}
