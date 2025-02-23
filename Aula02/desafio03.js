/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima 
a sua média e a sua classificação conforme a tabela abaixo

média = (nota 1 + nota 2 + nota 3) / 3

Classificação:
- Média menor que 5, reprovado
- Média entre 5 e 7, recuperação
- Média maior que 7, aprovado
*/

const nota1 = 10
const nota2 = 3
const nota3 = 4

Media = (nota1+nota2+nota3) / 3
console.log(Media.toFixed(2))

if(Media > 7){
    console.log('aprovado')}
else if(Media < 5){
    console.log('reprovado')}
else{
    console.log('recuperação')
}