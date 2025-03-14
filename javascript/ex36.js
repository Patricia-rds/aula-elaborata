/*
Faça um programa que peça um dado no formato dd/mm/aaaa e determine se o mesmo é um dado válido.
*/

console.log ("Digite uma data no formato: dd/mm/aaaa");

process.stdin.on("data", function(valor){

    let data = valor.toString().trim();
    const [dia, mes, ano] = data.split("/").map(Number);
    const dias = new Date(ano, mes, 0).getDate();

    if (data.length != 10)
    {
        console.log("A data está em um formato inválido");
    }

    if (data.charAt(2) != "/" || data.charAt(5) != "/")
    {
        console.log("A data está em um formato inválido");
    }

    if (dia <1 || dia > dias)
    {
        console.log("O dia é inválido");
    }

    if (mes < 1 || mes > 12)
    {
        console.log("O mês é inválido");
    }

    console.log ("Digite uma data no formato: dd/mm/aaaa");
});