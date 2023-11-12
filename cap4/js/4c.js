/*
Elaborar um programa que leia um número e verique se ele é ou não
perfeito. Um número dito perfeito é aquele que é igual à soma dos seus
divisores inteiros (exceto o próprio número). O programa deve exibir os
divisores do número e a soma deles.
*/
function verificarPerfeito (){
    var inNumero = document.getElementById("inNumero");
    var outDivisores = document.getElementById("outDivisores");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    if(numero == 0 || isNaN(numero)){
        alert("Por favor, digite um númeor válido");
        inNumero.focus();
        return;
    }
    
    var divisores = "Divisores do " + numero + ": 1";
    var soma = 1;
    for(var i = 2; i < numero; i++){
        if(numero % i == 0){
            divisores = divisores + "," + i;
            soma = soma + i;
        }
    }

    outDivisores.textContent = divisores + " Soma: (" + soma + ")";
    if(soma == numero){
        outResposta.textContent = numero + " É um Número Perfeito"
    }
    else{
        outResposta.textContent = numero + " Não É um Número Perfeito"
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPerfeito);