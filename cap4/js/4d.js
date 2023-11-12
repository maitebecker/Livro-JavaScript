/*
Elaborar um programa que leia um número e exiba estrelas na página, em
linhas diferentes. A cada nova linha, o número de estrelas deve ser
incrementado. Observação: caso você informe um valor alto, as linhas
podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda
da página. Para evitar que isso ocorra, crie uma nova classe no arquivo
estilos.css, que dena uma utuação à direita para essa imagem
*/
function criarEstrelas (){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Por favor, digite um número válido");
        numero.focus();
        return;
    }

    var resposta = "";
    for(var i = 0; i < numero; i++){
        for(var j = 0; j <= i; j++){
            resposta = resposta + "*";
        }
        resposta = resposta + "\n";
    }
    outResposta.textContent = resposta;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);