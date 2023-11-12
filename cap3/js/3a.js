/*
Elaborar um programa que leia um número. Informe se ele é par ou
ímpar. A Figura 3.7 ilustra a tela de execução do programa. Para os
exercícios, foi utilizada uma gura padrão, mas você pode substituí-la caso
tenha interesse.
*/

function verificarParImpar() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Por favor, digite um número válido...");
        inValor.focus();
        return;
    }

    if(numero % 2){
        outResposta.textContent = "Número Ímpar";
    }else{
        outResposta.textContent = "Número Par";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarParImpar);