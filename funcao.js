import Usuario from "./usuario.js";

export function converterParaDolar(valor) {
    //console.log("Esse é o valor", valor)  --> quando coloca isso o valor vem com o valor a ser convertido com desconto
    const taxaDolar = 4.94
    let convertDolar = valor / taxaDolar
    let dolar = convertDolar.toFixed(2)
    console.log("valor em Dólar", dolar)
    Usuario.adicionarOperacao(`Conversão para Dólar: ${valor} -> ${dolar}\n`);


}

 export function converterParaEuro(valor) {
    //console.log("Esse é o valor", valor)  --> quando coloca isso o valor vem com o valor a ser convertido com desconto
    const taxaEuro = 5.39
    let convertEuro = valor / taxaEuro
    let euro = convertEuro.toFixed(2)
    console.log("valor em Euro", euro)
    Usuario.adicionarOperacao(`Conversão para Euro: ${valor} -> ${euro}\n`);

}

 export function converterParaLibraEstelina(valor) {
    //console.log("Esse é o valor", valor)  --> quando coloca isso o valor vem com o valor a ser convertido com desconto
    const taxaLibra = 6.34
    let convertLibra = valor / taxaLibra
    let libra = convertLibra.toFixed(2)
    console.log("valor em Libra-Esterlina", libra)
    Usuario.adicionarOperacao(`Conversão para Libra-Esterlina: ${valor} -> ${libra}\n`);

}

 export function converterParaRandAfricano(valor) {
    //console.log("Esse é o valor", valor)  --> quando coloca isso o valor vem com o valor a ser convertido com desconto
    const taxaRand = 0.26
    let convertRand = valor / taxaRand
    let rand = convertRand.toFixed(2)
    console.log("valor em Rand Sul-Africano", rand)
    Usuario.adicionarOperacao(`Conversão para Rand Sul-Africano: ${valor} -> ${rand}\n`);

}