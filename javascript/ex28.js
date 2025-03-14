/* 
Faça um Programa que exige em que você estuda. Peça para digitar M-matutino ou V-Vespertino ou N-Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

let entrada = "a"

if (entrada == "m")
{
    console.log("Bom dia!");
}
else if (entrada == "v")
{
    console.log("Boa tarde!");
}
else if (entrada == "n")
{
    console.log("Boa noite!");
}
else
{
    console.log("Valor inválido!");
}