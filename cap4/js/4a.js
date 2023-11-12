/*
Elaborar um programa que leia o nome de uma fruta e um número. O
programa deve repetir a exibição do nome da fruta, de acordo com o número
informado. Utilize o “*” para separar os nomes. 
*/
function repetirFruta (){
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if(fruta == "" || numero == 0 || isNaN(numero)){
        alert("Por favor, digite um valor válido!");
        inNumero.focus();
        return;
    }

    var resposta = "";
    for(var i = 0; i < numero - 1; i++){
        resposta = resposta + fruta + "*";
    }
    outResposta.textContent = resposta + fruta;
}
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);