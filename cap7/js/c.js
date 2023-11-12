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
  
    outDesconto.textContent = "Desconto R$: " +  desconto;
    outPagar.textContent = "A pagar R$: " + pagar;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDesconto);