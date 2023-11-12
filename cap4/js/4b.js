/*
Digamos que o número de chinchilas de uma fazenda triplica a cada ano,
após o primeiro ano. Elaborar um programa que leia o número inicial de
chinchilas e anos e informe ano a ano o número médio previsto de chinchilas
da fazenda. Validar a entrada para que o número inicial de chinchilas seja
maior ou igual a 2 (um casal). 
*/
function mostrarPrevisão (){
    var inNumero = document.getElementById("inNumero");
    var inAnos = document.getElementById("inAnos");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    var anos = Number(inAnos.value);

    if(numero == 0 || isNaN(numero) || anos == 0 || isNaN(anos)){
        alert("Por favor, digite um valor válido");
        inNumero.focus();
        return;
    }

    var resposta = "";
    if(numero >= 2){
        for(var i = 1; i <= anos; i++){
            resposta = resposta + i + "º Ano: " + numero + " Chinchilas\n";
            numero = numero * 3;
        }
    }
    else{
        alert("O número de chinchilas deve ser maior do que 2!");
        inNumero.focus();
        return;
    }

    outResposta.textContent = resposta;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPrevisão);