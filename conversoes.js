


class ValorAconverter {
    constructor(valor) {
        this.valor = parseFloat(valor.replace(",", "."));
    }

    impostoIOF() {
        let desconto = this.valor * 0.011;
        this.valor = this.valor - desconto;
        valor = this.valor.toFixed(2);
    }
}

function converterParaDolar(valor, usuario) {
    const taxaDolar = 4.94;
    let convertDolar = valor / taxaDolar;
    let dolar = convertDolar.toFixed(2);
    console.log("valor em Dólar", dolar);
    usuario.adicionarOperacao(`Conversão para Dólar: ${valor} -> ${dolar}\n`);
}

function converterParaEuro(valor, usuario) {
    const taxaEuro = 5.39;
    let convertEuro = valor / taxaEuro;
    let euro = convertEuro.toFixed(2);
    console.log("valor em Euro", euro);
    usuario.adicionarOperacao(`Conversão para Euro: ${valor} -> ${euro}\n`);
}

function converterParaLibraEstelina(valor, usuario) {
    const taxaLibra = 6.34;
    let convertLibra = valor / taxaLibra;
    let libra = convertLibra.toFixed(2);
    console.log("valor em Libra-Esterlina", libra);
    usuario.adicionarOperacao(`Conversão para Libra-Esterlina: ${valor} -> ${libra}\n`);
}

function converterParaRandAfricano(valor, usuario) {
    const taxaRand = 0.26;
    let convertRand = valor / taxaRand;
    let rand = convertRand.toFixed(2);
    console.log("valor em Rand Sul-Africano", rand);
    usuario.adicionarOperacao(`Conversão para Rand Sul-Africano: ${valor} -> ${rand}\n`);
}

function exibirMenu() {
    console.log("<1> Dólar Americano\n<2> Euro\n<3> Libra Esterlina\n<4> Rand Sul-Africano\n<5> Extrato");
}

function processarEscolha(escolha, valor, usuario) {
    switch (escolha) {
        case 1:
            console.log("Converter para DÓLAR AMERICANO");
            converterParaDolar(valor, usuario);
            break;
        case 2:
            console.log("Converter para EURO");
            converterParaEuro(valor, usuario);
            break;
        case 3:
            console.log("Converter para LIBRA ESTERLINA");
            converterParaLibraEstelina(valor, usuario);
            break;
        case 4:
            console.log("Converter para RAND SUL-AFRICANO");
            converterParaRandAfricano(valor, usuario);
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
