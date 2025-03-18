/*
Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes.

Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados alcançados pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média com as notas restantes).

As notas não são informadas ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo: 
Atleta: Aparecido Parente 
Nota: 9.9 
Nota: 7.5 
Nota: 9.5 
Nota: 8.5 
Nota: 9.0 
Nota: 8.5 
Nota: 9.7

Resultado final:
Atleta: Aparecido Parente
Melhor nota: 9.9
Pior nota: 7.5
Média: 9,04
*/

let atleta = {
    nome: "Magda Luterno",
    notas: [9.1, 7.5, 9.3, 8.9, 6.8, 8.5, 9.6]
};

function calculoMedia(atleta) {
    const {nome, notas} = atleta;

    const melhorNota = Math.max(...notas);
    const piorNota = Math.min(...notas);
    const notasSeparadas = [];

    notas.forEach(nota => {
        if (nota !== melhorNota && nota !== piorNota)
        {
            notasSeparadas.push(nota);
        }
    });

    let soma = 0;
    notasSeparadas.forEach(nota => {
        soma += nota;
    });

    const media = soma / notasSeparadas.length;

    console.log("Atleta:", nome);
    console.log("Melhor nota:", melhorNota);
    console.log("Pior nota:", piorNota);
    console.log("Média:", media.toFixed(2));
}

calculoMedia(atleta);