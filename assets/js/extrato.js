import {Extrato} from './classeExtrato.js';


const extrato = new Extrato();


function adicionarTransacaoNoExtrato(descricao, valor, moeda, convertido, desconto, valorComDesconto) {
    extrato.adicionarTransacao(descricao, valor, moeda, convertido, desconto, valorComDesconto);
    atualizarExtrato();
}

function atualizarExtrato() {
    const extratoElement = document.getElementById('extrato');
    extratoElement.innerHTML = '';

    extrato.gerarExtrato().forEach((transacao) => {
        const linha = document.createElement('li');
        linha.textContent = `${transacao.descricao}: ${transacao.valor} ${transacao.moeda} - Convertido: ${transacao.convertido}, Desconto: R$ ${transacao.desconto}, Valor com Desconto: R$ ${transacao.valorComDesconto} - ${transacao.data}`;
        extratoElement.appendChild(linha);
    });
}

// Adicione este evento no seu código existente
document.getElementById('botaoConverter').addEventListener('click', () => {
    const valorElement = document.getElementById('valor');
    const moedaElement = document.getElementById('moeda');

    const valor = Number(valorElement.value) || 0;
    const moeda = moedaElement.options[moedaElement.selectedIndex].text;

    if (!taxasConversao.hasOwnProperty(moeda)) {
        resultadoElement.textContent = 'Moeda não encontrada nas taxas de conversão.';
        return;
    }

    const { convertido, desconto, valorComDesconto } = realizarConversao(valor, moeda);

    // Adiciona a transação ao extrato
    adicionarTransacaoNoExtrato('Conversão', valor, moeda, convertido, desconto, valorComDesconto);

    // Atualiza o extrato na interface
    atualizarExtrato();
});
 