/*
Faça um Programa que parte as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.
*/

let notas = [
    [6, 7, 8, 9],
    [7, 7, 7, 7],
    [5, 4, 6, 8],
    [9, 10, 10, 8],
    [6, 5, 7, 8],
    [10, 9, 10, 9],
    [4, 5, 6, 5],
    [8, 8, 7, 9],
    [7, 6, 7, 7],
    [6, 6, 8, 10]
];
let medias = [];
let mediaAlta = 0;

notas.forEach(notasAlunos => {
    const soma = notasAlunos.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notasAlunos.length;

    let calculoMedia = soma / 4;
    let alunos = ("Média do aluno:")
    console.log(alunos, calculoMedia);


    medias.push(media);

    if (media >= 7.0) {
        mediaAlta++;
    }
});

console.log("Alunos com média maior ou igual a 7.0:", mediaAlta);