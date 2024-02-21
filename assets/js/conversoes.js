
function converterMoeda() {
    const valorElement = document.getElementById('valor');
    const moedaElement = document.getElementById('moeda');
    const resultadoElement = document.getElementById('resultado');

    const valor = Number(valorElement.value) || 0;
    const moeda = moedaElement.options[moedaElement.selectedIndex].text;

    if (!taxasConversao.hasOwnProperty(moeda)) {
        resultadoElement.textContent = 'Moeda não encontrada nas taxas de conversão.';
        return;
    }

    const { convertido, desconto, valorComDesconto } = realizarConversao(valor, moeda);

    resultadoElement.textContent = `${convertido} (Desconto: R$ ${desconto}, Valor com Desconto: R$ ${valorComDesconto})`;
}

document.getElementById('botaoConverter').addEventListener('click', converterMoeda);

class ValorAconverter {
    constructor(valor) {
        this.valor = Number(valor) || 0;
    }

    impostoIOF() {
        this.descontoIOF = this.valor * 0.011;
        this.valor = this.valor - this.descontoIOF;
        this.valor = Number(this.valor.toFixed(2));
    }
}


const taxasConversao = {
    'Dólar Americano (USD)': 4.97,
    'Dólar Australiano (AUD)': 3.25,
    'Euro (EUR)': 5.35,
    'Libra Egípcia (EGP)': 0.16,
    'Libra Esterlina (GBP)': 6.34,
    'Peso Colombiano (COP)': 0.0013,
    'Rand Sul-Africano (ZAR)': 0.26,
    'Rupia Indiana (INR)': 0.060,
};

function realizarConversao(valor, moeda) {
    const taxa = taxasConversao[moeda];
    const descontoIOF = valor * 0.011;
    const valorComDesconto = valor - descontoIOF;
    const convertido = valorComDesconto / taxa;
    

    return {
        convertido: convertido.toFixed(2),
        desconto: descontoIOF.toFixed(2),
        valorComDesconto: valorComDesconto.toFixed(2),
    };
}