/*
Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão
disponíveis em um terminal de caixa eletrônico. Elaborar um programa que
leia um valor de saque de um cliente, verique sua validade (ou seja, se pode
ser pago com as notas disponíveis) e informe o número mínimo de notas de
100, 50 e 10 necessárias para pagar esse saque
*/

function exibirNotas(){
    var inValor = document.getElementById("inValor");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");

    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";

    var valor = Number(inValor.value);

    if(valor == 0 || isNaN(valor)){
        alert("Por favor, digite um número válido...");
        inValor.focus();
        return;
    }else if( valor % 10 != 0){
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inValor.focus();
        return;
    }else{
        var notasCem = Math.floor(valor / 100);
        var resto = valor % 100;
        var notasCinquenta = Math.floor(resto / 50);
        resto = resto % 50;
        var notasDez = Math.floor(resto / 10);
       
        if(notasCem > 0){
            outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
        }
        if(notasCinquenta > 0){
            outNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta;
        }
        if(notasDez> 0){
            outNotasDez.textContent = "Notas de R$ 10: " + notasDez;
        }
    }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirNotas);