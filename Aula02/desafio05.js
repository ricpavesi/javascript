const precoEtiqueta = 100;
const precoDebito = precoEtiqueta * 0.10;
const precoPix = precoEtiqueta * 0.15;
const precoParcelado2x = precoEtiqueta;
const precoMaisParcelas = precoEtiqueta * 0.10;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log(precoParcelado2x)
}
else if (formaPagamento === 2){
    console.log(precoEtiqueta - precoDebito)
}
else if (formaPagamento === 3){
    console.log(precoEtiqueta - precoPix)
}
else if (formaPagamento === 4){
    console.log(precoEtiqueta + precoMaisParcelas)
}