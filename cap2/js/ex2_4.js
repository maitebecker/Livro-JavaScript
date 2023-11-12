/*
Elaborar um programa para um restaurante que leia o preço por kg e o
consumo (em gramas) de um cliente. Exiba o valor a ser pago.
*/
function calcularPreco() {
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");
    
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    valor = (consumo / 1000) * quilo;

    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);