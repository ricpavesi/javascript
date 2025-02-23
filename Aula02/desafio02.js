/*faça um programa para calcular o valor de uma viagem:
1 - preço do etanol
2 - preço da gasolina
3 - o tipo de combustível que está no carro
4 - gasto médio de combustível por km
5 - distância em km da viagem

imprima no console o valor que será gasto para realizar a viagem
*/

const etanol = 5.00
const gasolina = 30.00
const gastoMedio = 7
const distViagem = 100
const tipoCombustivel = 'etanol'

const viagemEtanol = (distViagem / gastoMedio) * etanol
const viagemGasolina = (distViagem / gastoMedio) * gasolina


if (tipoCombustivel === 'etanol'){
    console.log(viagemEtanol.toFixed(2))
}
else{
    console.log(viagemGasolina.toFixed(2))
}
