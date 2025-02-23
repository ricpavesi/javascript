/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM rodado;
3 - distância em Km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
*/

const combustivel = 3.22;
let gastoMedio = 11;
let distViagem = 40;

let valorGasto = distViagem / gastoMedio * combustivel;

console.log(valorGasto.toFixed(2));

/* toFixed(2) foi usado para limitar a duas casas decimais após o ponto*/