import {converterParaDolar} from "./funcao.js";
import {converterParaEuro} from "./funcao.js";
import {converterParaLibraEstelina} from "./funcao.js";
import {converterParaRandAfricano} from "./funcao.js";




// para exibir os dados do usuário
function exibirDetalhes() {
   console.log(`Nome: ${nome}\nIdade: ${idade}\nE-mail: ${email}`);
}


let valor = prompt("Informe o valor que deseja converter");

class ValorAconverter {
   constructor(valor) {
       this.valor = parseFloat(valor.replace(",", "."));
   }


   impostoIOF() {
       let desconto = this.valor * 0.011
       this.valor = this.valor - desconto
       valor = this.valor.toFixed(2)
   }
}


console.log(`O valor informado foi: ${valor}`)
let valorAConverter1 = new ValorAconverter(valor);

valorAConverter1.impostoIOF();
console.log(`O valor a ser convertido com descontos é: ${valor}`)


//Função para exibir o menu númerico
function exibirMenu() {
   console.log(" <1> Dólar Americano\n <2> Euro\n <3> Libra Esterlina\n <4> Rand Sul-Africano\n <5> Extrato ");

}


//Função para processar a escolha do usuário
function processarEscolha(escolha) {

   switch (escolha) {
       case 1:
           console.log("Converter para DÓLAR AMERICANO");
           converterParaDolar();
           break;

       case 2:
           console.log("Converter para EURO");
           converterParaEuro();
           break;
       case 3:
           console.log("Converter para LIBRA ESTERLINA");
           converterParaLibraEstelina();
           break;
       case 4:
           console.log("Converter para RAND SUL-AFRICANO");
           converterParaRandAfricano();
           break;
       case 5:
           console.log("Exibindo Extrato...");
           exibirDetalhes();
           console.log(`${usuario.extrato}\n`);
           console.log("Saindo do sistema!...");
           break;
       default:
           console.log("Opção inválida. Tente novamente");
   }
}




// Loop para exibir o menu e processar a escolha do usuário
let escolha = 0;

do {
   exibirMenu();
   escolha = parseInt(prompt("Digite o número da opção desejada:"));

   // Verifica se a escolha é um número válido
   if (isNaN(escolha)) {
       console.log("Por favor, digite um número válido");
       continue;
   }

   processarEscolha(escolha);
} while (escolha !== 5);


