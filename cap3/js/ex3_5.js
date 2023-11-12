/*
Elaborar um programa que leia um número e calcule sua raiz quadrada.
Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário,
informe: ‘Não há raiz exata para ..’.
*/

function exibirRaiz() {
    var inNumero = document.getElementById("inNumero");
    var outResposta= document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Por favor, insira um número válido...");
        inNumero.focus();
        return;
    }

    var raiz = Math.sqrt(numero);
    if(raiz == Math.floor(raiz)){
        outResposta.textContent = "Raiz quadrada de " + numero + " é " + raiz;
    }else{
        outResposta.textContent = "Não há raiz exata para " + numero;
    }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirRaiz);