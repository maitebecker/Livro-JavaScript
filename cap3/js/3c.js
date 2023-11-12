/*
Elaborar um programa para simular um parquímetro, o qual leia o valor
de moedas depositado em um terminal de estacionamento rotativo. O
programa deve informar o tempo de permanência do veículo no local e o
troco (se existir), como no exemplo da Figura 3.9. Se o valor for inferior ao
tempo mínimo, exiba a mensagem: “Valor Insuciente”. Considerar os
valores/tempos da Tabela (o máximo é 120 min).

R$ 1,00 - 30min
R$ 1,75 - 60min
R$ 3,00 - 120min
*/

function confirmarDeposito() {
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);

    if (valor == 0 || isNaN(valor) || valor < 1) {
        alert("Por favor, digite um valor válido...");
        inValor.focus();
        return;
    }

    var troco;
    var tempo;
    if (valor >= 1 && valor < 1.75) {
        tempo = 30;
        troco = valor - 1;
    }

    if (valor >= 1.75 && valor < 3) {
        tempo = 60;
        troco = valor - 1.75;
    }
    if (valor >= 3) {
        tempo = 120;
        troco = valor - 3;
    }

    outTempo.textContent = "Tempo: " + tempo;
    if(troco > 0){
         outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }
    else{
        outTroco.textContent = " ";
    }    
}

var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", confirmarDeposito);