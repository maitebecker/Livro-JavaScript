/*
Elaborar um programa para uma veterinária, o qual leia o preço de uma
vacina e se o cliente possui ou não convênio. Caso possua algum convênio,
exibir uma caixa de seleção com os convênios “Amigo dos Animais” e “Saúde
Animal”. O programa deve exibir o valor do desconto (10% sem convênio;
20% para “Amigo dos Animais”; 50% para “Saúde Animal”) e o valor a ser
pago. Criar a função:
• calcularDesconto() – que receba os parâmetros valor e taxa de
desconto. Retornar o valor do desconto
*/
function trocarItem(){
    var inConvenio = document.getElementById("inConvenio");

    if(rdSim.checked){
        inConvenio.className = "exibe";
    }else{
        inConvenio.className = "oculta";
    }
}
var rdSim = document.getElementById("rdSim");
rdSim.addEventListener("change", trocarItem);

var rdNao = document.getElementById("rdNao");
rdNao.addEventListener("change", trocarItem);

function calcularDesconto(){
    var inConvenio = document.getElementById("inConvenio");
    var inValor = document.getElementById("inValor");
    var outDesconto = document.getElementById("outDesconto");
    var outPagar = document.getElementById("outPagar");

    var valor = Number(inValor.value);

    if(valor == 0 || isNaN(valor)){
        alert("Digite um valor válido");
        inValor.focus();
        return;
    }

    var desconto;
    if(rdSim.checked){
        var num = inConvenio.selectedIndex;
        var convenio= inConvenio.options[num].text;
        if(convenio == "Saúde Animal"){
            desconto =  valor * 0.5;
        }else if(convenio == "Amigo dos Animais"){
            desconto = valor * 0.2;}
    } else{
        desconto = valor * 0.1;
    }

    var pagar = valor - desconto;
  
    outDesconto.textContent = "Desconto R$: " +  desconto.toFixed(2);
    outPagar.textContent = "A pagar R$: " + pagar.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDesconto);