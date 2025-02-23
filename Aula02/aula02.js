
const numero = 0
const eNumeroPar = (numero % 2) === 0; /* %  é igual resto da divisão -
 se o resto da divisão for maior que zero o número ímpar
*/

/*Abaixo foi montado uma estrutura condicional usando if e ! (negação)
obs: está como observação por causa do exemplo após este

if(eNumeroPar) {
    console.log('Par')
}

console.log(eNumeroPar);

if(!eNumeroPar) {
    console.log('ímpar')
}
    */

/*aqui foi usada a estrutura if else para montar a condicional*/

if(numero === 0) {console.log('número inválido')

}

else if(eNumeroPar) {
    console.log('Par')
}

else{
    console.log('ímpar')
}

/*Agora vamos usar como exemplo uma situação em que queremos que,
 se o número for 0 não seja impresso ímpar ou par, vamos será impresso ‘o número é inválido.
 foi inserido na linha 23 o código if(numero === 0) {console.log('número inválido')}
 
 e a linha 27 foi inserido um 'else' na frente do 'if'*/
 
