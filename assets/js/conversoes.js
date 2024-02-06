

class ValorAconverter {
    constructor(valor) {
        this.valor = parseFloat(valor.replace(",", "."));
    }

    impostoIOF() {
        this.descontoIOF = this.valor * 0.011;
        this.valor = this.valor - this.descontoIOF;
        this.valor = parseFloat(this.valor.toFixed(2));
    }
}

const taxasConversao = {
    'Dólar Americano': 4.94,
    'Euro': 5.39,
    'Libra Esterlina': 6.34,
    'Rand Sul-Africano': 0.26
};

function converterMoeda(valor, taxa, simbolo) {
    const convertido = valor / taxa;
    const descontoIOF = valor * 0.011;
    const valorComDesconto = valor - descontoIOF;
    return `${simbolo} ${convertido.toFixed(2)} (Desconto: R$ ${descontoIOF.toFixed(2)}, Valor com Desconto: R$ ${valorComDesconto.toFixed(2)})`;
}

function exibirMenu() {
    console.log("<1> Dólar Americano\n<2> Euro\n<3> Libra Esterlina\n<4> Rand Sul-Africano\n<5> Extrato");
}

function processarEscolha(escolha, valor, usuario) {
    switch (escolha) {
        case 1:
        case 2:
        case 3:
        case 4:
            const moeda = Object.keys(taxasConversao)[escolha - 1];
            const taxa = taxasConversao[moeda];
            const valorConvertido = converterMoeda(valor, taxa, ['$', '€', '£', 'R'][escolha - 1]);
            console.log(`Converter para ${moeda}`);
            console.log("Valor convertido:", valorConvertido);
            usuario.adicionarOperacao(`Conversão para ${moeda}: R$ ${valor} -> ${valorConvertido}\n`);
            break;
        case 5:
            console.log("Exibindo Extrato...");
            usuario.exibirDetalhes();
            console.log(`${usuario.extrato}\n`);
            console.log("Saindo do sistema!...");
            break;
        default:
            console.log("Opção inválida. Tente novamente");
    }
}
