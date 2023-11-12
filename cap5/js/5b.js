/*Elaborar um programa que adicione números a um vetor. O programa
deve impedir a inclusão de números repetidos. Exibir a lista de números a
cada inclusão. Ao clicar no botão Vericar Ordem, o programa deve analisar o
conteúdo do vetor e informar se os números estão ou não em ordem
crescente.*/
var vetor = [];
function adicionarNumeros(){
    var inNumero = document.getElementById("inNumero");
    var outNumeros = document.getElementById("outNumeros");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Digite um número válido!");
        inNumero.focus();
        return;
    }

    vetor.push(numero);

    outNumeros.textContent = "Números:" + vetor.join(",");
    
    outResposta.textContent = "";
    inNumero.value = "";
    inNumero.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumeros);

function verificarOrdem(){
    if(vetor.length == 0){
        alert("Adicione um número na lista!")
        return;
    }
    var copia = vetor.slice();
    copia.sort(function(a, b){return a-b});

    var ordem = true;
    for(var i = 0; i < vetor.length; i++){
        if(vetor[i] != copia[i]){
            ordem = false;
        }
    }
    
    var resposta = document.getElementById("outResposta");
    outResposta.textContent = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente";
}
var bbtVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);