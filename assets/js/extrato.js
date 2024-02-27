// Extrato.js

 class Extrato {
    constructor() {
        this.transacoes = [];
        this.saldos = {};
    }

    adicionarTransacao(descricao, valor, moeda, convertido, desconto, valorComDesconto, data) {
        const transacao = {
            descricao,
            valor,
            moeda,
            convertido,
            desconto,
            valorComDesconto,
            data,
        };

        // Adiciona a transação no array de transações
        this.transacoes.push(transacao);

        // Atualiza o saldo da moeda
        if (!this.saldos.hasOwnProperty(moeda)) {
            this.saldos[moeda] = 0;
        }
        this.saldos[moeda] += Number(transacao.convertido);

        // Atualiza o extrato na interface
        atualizarExtrato();
    }

    gerarExtrato() {
        return this.transacoes;
    }
}

const extrato = new Extrato();

function adicionarTransacaoNoExtrato(descricao, valor, moeda, convertido, desconto, valorComDesconto, data) {
    extrato.adicionarTransacao(descricao, valor, moeda, convertido, desconto, valorComDesconto, data);
}

function atualizarExtrato() {
    const extratoElement = document.getElementById('extrato');
    if (extratoElement) {
        extratoElement.innerHTML = '';
    

    extrato.gerarExtrato().forEach((transacao) => {
        const linha = document.createElement('li');
        linha.textContent = `${transacao.descricao}: ${transacao.valor} ${transacao.moeda} - Convertido: ${transacao.convertido}, Desconto: R$ ${transacao.desconto}, Valor com Desconto: R$ ${transacao.valorComDesconto} - ${transacao.data}`;
        //linha.style.listStyleImage = 'url(./convert-icon.png)';
        //linha.style.backgroundSize = '1px';
        extratoElement.appendChild(linha);
       
    });
}

    // Atualiza os saldos
    atualizarSaldos();
}

function atualizarSaldos() {
    const saldosElement = document.getElementById('saldos');
    //if (!saldosElement) {
    //    console.error('Elemento com ID "saldos" não encontrado.');
    //    return;
    //} TIRAR - ISSO É SÓ VALIDAÇÃO DE TESTE

    saldosElement.innerHTML = '';
    for (const moeda in extrato.saldos) {
        const saldoLinha = document.createElement('li');
        saldoLinha.textContent = `Saldo ${moeda}: ${extrato.saldos[moeda].toFixed(2)}`;
        saldosElement.appendChild(saldoLinha);
    }
    //nova linha que inclui para fazer a pagina de transferência
    localStorage.setItem('saldos', JSON.stringify(extrato.saldos));
}

document.addEventListener('DOMContentLoaded', () => {
    // Carrega as transações do localStorage
    const transacoesDoLocalStorage = JSON.parse(localStorage.getItem('transacoes')) || [];

    // Adiciona as transações do localStorage ao extrato
    transacoesDoLocalStorage.forEach((transacao) => {
        extrato.adicionarTransacao(
            transacao.descricao,
            transacao.valor,
            transacao.moeda,
            transacao.convertido,
            transacao.desconto,
            transacao.valorComDesconto,
            transacao.data
        );
    });

    // Atualiza o extrato ao carregar a página
    atualizarExtrato();
});


