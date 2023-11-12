/*
Uma palavra ou frase é um palíndromo quando pode ser lida nos dois
sentidos, como RADAR, MUSSUM, ABBA. Elaborar um programa que leia
uma frase e informe se ela é ou não um palíndromo (converter a frase para
caixa alta)
*/
function verificarPalindromo(){
    var inFrase = document.getElementById("inFrase");
    var outResposta = document.getElementById("outResposta");

    var frase = inFrase.value.toUpperCase();

    if(frase == ""){
        alert("Por favor, digite uma frase válida!");
        inFrase.focus();
        return;
    }

    var fraseJunta = frase.replace(/ /g, "");
    var tamanho = fraseJunta.length;
    var fraseInvertida = "";
    for(i = tamanho-1 ; i >= 0; i--){
        fraseInvertida += fraseJunta.charAt(i);
    }
    console.log(fraseInvertida)
    var cont = 0;
    var flag = false;
    for(i = tamanho-1; i >= 0; i--){
        if(fraseJunta.charAt(i) === fraseInvertida.charAt(i)){
            cont++;
        }
    }
    if((cont) == tamanho){
        flag = true;
    }

    /*Solução alternativa:
    // for repete até a metade (compara as primeiras letras com as últimas)
    for (var i = 0; i < tamanho / 2; i++) {
     // verifica se a primeira letra é diferente da última (e sucessivamente)
     if (frase2[i] != frase2[tam - 1 - i]) {
      flag = false;
      break;
    }
  } */
    var resposta = frase + (flag ? " é " : " não é ") + "um Palíndromo"

    outResposta.textContent = resposta ;
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPalindromo);