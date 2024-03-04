class Extrato {
    constructor() {
        this.transacoes = [];
        this.saldos = JSON.parse(localStorage.getItem('saldos')) || {};
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

        this.transacoes.push(transacao);

        if (!this.saldos.hasOwnProperty(moeda)) {
            this.saldos[moeda] = 0;
        }
        this.saldos[moeda] += Number(transacao.convertido);

        // Salvar os saldos no localStorage
        localStorage.setItem('saldos', JSON.stringify(this.saldos));

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
            const listaItem = document.createElement('li');
            listaItem.className = 'list-group-item d-flex align-items-center';

            const iconeMarcador = document.createElement('span');
            iconeMarcador.className = 'fa-solid fa-money-bill-transfer mr-2';

            listaItem.appendChild(iconeMarcador);

            const textoTransacao = document.createElement('div');
            textoTransacao.textContent = `${transacao.descricao}: ${transacao.valor} ${transacao.moeda} \n Valor Convertido: ${transacao.convertido}, Taxa de conversão: R$ ${transacao.desconto}, Valor informado com Desconto: R$ ${transacao.valorComDesconto} - ${transacao.data}`;

            listaItem.appendChild(textoTransacao);

            extratoElement.appendChild(listaItem);
        });

        atualizarSaldos();
    }
}

function atualizarSaldos() {
    console.log('Chamando atualizarSaldos');
    const saldosElement = document.getElementById('saldos');

    if (!saldosElement) {
        console.error('Elemento com ID "saldos" não encontrado.');
        return;
    }

    saldosElement.innerHTML = '';

    if (!extrato || !extrato.saldos) {
        console.error('extrato ou extrato.saldos não estão definidos ou são inválidos.');
        return;
    }

    for (const moeda in extrato.saldos) {
        const saldoCard = document.createElement('div');
        saldoCard.className = 'card card-saldo mb-3';

        const saldoCardBody = document.createElement('div');
        saldoCardBody.className = 'card-body';

        const saldoTitulo = document.createElement('h3');
        saldoTitulo.className = 'card-title';
        saldoTitulo.textContent = `Saldo ${moeda}`;

        const saldoTexto = document.createElement('p');
        saldoTexto.className = 'card-text';
        saldoTexto.textContent = `${extrato.saldos[moeda].toFixed(2)}`;

        saldoCardBody.appendChild(saldoTitulo);
        saldoCardBody.appendChild(saldoTexto);

        saldoCard.appendChild(saldoCardBody);
        saldosElement.appendChild(saldoCard);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const transacoesDoLocalStorage = JSON.parse(localStorage.getItem('transacoes')) || [];

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

    atualizarExtrato();
});

// Nova linha que inclui para fazer a página de transferência
localStorage.setItem('saldos', JSON.stringify(extrato.saldos));