/*
Elaborar um programa que leia três lados e verique se eles podem ou não
formar um triângulo. Para formar um triângulo, um dos lados não pode ser
maior que a soma dos outros dois. Caso possam formar um triângulo, exiba
também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2
lados iguais) e Escaleno (3 lados diferentes)
*/

function verificarLados() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResposta = document.getElementById("outResposta");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (ladoA <= 0 || isNaN(ladoA) || ladoB <= 0 || isNaN(ladoB) || ladoC <= 0 || isNaN(ladoC)) {
        alert("Por favor, digite um valor válido...");
        inLadoA.focus();
        return;
    }

    if (ladoA < (ladoB + ladoC) || ladoB < (ladoC + ladoA) || ladoC < (ladoB + ladoA)) {
        outResposta.textContent = "Lados podem formar um triângulo";
        if (ladoA == ladoB && ladoB == ladoC) {
            outTipo.textContent = "Tipo: Equilátero";
        }
        else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
                outTipo.textContent = "Tipo: Isósceles";
        }
        else if (ladoA != ladoB && ladoB != ladoC) {
                    outTipo.textContent = "Tipo: Escaleno";
        }
    }else{
        outResposta.textContent = "Lados não podem formar um triângulo";
    }

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarLados);