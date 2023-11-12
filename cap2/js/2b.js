/*
O programa deve ler o valor de cada 15 minutos de uso de um computador 
e o tempo de uso por um cliente em minutos. Informe o valor a ser pago 
pelo cliente, sabendo que as frações extras de 15 minutos devem ser
cobradas de forma integral. 
*/

function calcularValor (){
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValor = document.getElementById("outValor");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);
    
    var preco = valor * Math.ceil((tempo / 15));

    outValor.textContent = "Valor a Pagar R$: " + preco.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);