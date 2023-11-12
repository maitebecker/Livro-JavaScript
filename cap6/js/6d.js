/*
Suponha que o prazo para o pagamento de uma infração de trânsito com
desconto seja de 90 dias. Elaborar um programa que leia a data de uma
infração e o valor da multa. Informe qual a data limite do pagamento com
desconto (até 90 dias) e o valor a ser pago até essa data (com 20% de
desconto)
*/
function calcularDataValor(){
    var inData = document.getElementById("inData");
    var inValor = document.getElementById("inValor");
    var outData = document.getElementById("outData");
    var outValor = document.getElementById("outValor");

    var data = inData.value;
    var valor = Number(inValor.value);

    if(valor == 0 || isNaN(valor) || data == ""){
        alert("Por favor, digite numeros válidos!");
        inData.focus();
        return;
    }

   
    var dataLimite = new Date();

    // a data vem no formato aaaa-mm-dd
    var partes = data.split("-");
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1);
    dataLimite.setFullYear(Number(partes[0]));

 
    var dia = dataLimite.getDate();
    dataLimite.setDate(dia + 90);

    var dia = dataLimite.getDate();
    var mes = dataLimite.getMonth() + 1;
    var ano = dataLimite.getFullYear();

    var valorDesconto = valor * 0.8;

    outData.textContent = "Data Limite para Pagamento com Desconto: " + + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    outValor.textContent = "Valor com Desconto R$: " + valorDesconto.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDataValor);