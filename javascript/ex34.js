/*
Faça um programa que calcula as raízes de uma descoberta de segundo grau, na forma ax² + bx + c.
O programa deverá pedir os valores de a, para fazer as consistências, informando ao usuário nas seguintes situações:

Se o usuário informar o valor de A igual a zero, a equação não é do segundograu e o programa não deve fazer pedir os demais valores,sendo encerrado;

Se o delta calculado for negativo, a equação não possui raízes reais. Informe ao usuário e encerre o programa;
Se o delta calculado for igual a zero a equação possui apenas uma raiz real, informe-a ao usuário;

Se o delta for positivo, a equação possui duas raiz reais, informe-as ao usuário;
*/

let a = 3;
let b = 20;
let c = 2;
let delta = b * b - (4 * a * c);
let raiz = -b / (2 * a);
let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

if (a === 0)
{
    console.log("A equação não é de segundo grau. Encerrando o programa.");
}
else if (delta < 0)
{
    console.log("Não possui raízes reais.");
}
else if (delta === 0)
{
    console.log("A equação possui 1 raiz real:", "x =", raiz);
}
else
{
    console.log("A equação possui 2 raízes reais:", "x1 =", raiz1, "e x2 =", raiz2);
}