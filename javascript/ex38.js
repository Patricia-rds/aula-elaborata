/*
Faça um Programa para uma caixa eletrônica.

O programa deverá perguntar ao usuário o valor do saque e depois informar quantas notas de cada valor serão fornecidas.

As notas disponíveis serão de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais.

O programa não deve se preocupar com a quantidade de notas existentes na máquina.

Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;

Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece notas três de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/
console.log("Digite o valor de saque (entre 10 e 600): ")

process.stdin.on("data", function(saque){

const notasDisp = [1, 5, 10, 50, 100];

let valorSaque = saque.toString().trim();

if (valorSaque < 10 || valorSaque > 600)
{
    console.log("Valor inválido");
}
});