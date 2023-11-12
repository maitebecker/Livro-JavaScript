/*
Elaborar um programa que leia a velocidade permitida em uma estrada e
a velocidade de um condutor. Se a velocidade for inferior ou igual à
permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a
permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
velocidade permitida, exiba “Multa Grave
*/

function verificarVelocidade() {
    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
    var outResposta = document.getElementById("outResposta");

    var velocidadePermitida = Number(inVelocidadePermitida.value);
    var velocidadeCondutor = Number(inVelocidadeCondutor.value);

    if (velocidadePermitida == 0 || isNaN(velocidadePermitida) ||
    velocidadeCondutor == 0 || isNaN(velocidadeCondutor)){
        alert("Por favor, digite uma velocidade válida...");
        inVelocidadePermitida.focus();
        return;
    }

    if(velocidadeCondutor <= velocidadePermitida){
        outResposta.textContent = "Situação: Sem multa";
    }
    else if(velocidadeCondutor > (0.2 * velocidadePermitida + velocidadePermitida)){
        outResposta.textContent = "Situação: Multa grave";
    }
    else{
        outResposta.textContent = "Situação: Multa leve";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);