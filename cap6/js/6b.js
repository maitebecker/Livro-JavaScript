/*
Elaborar um programa que leia o nome de um autor de um livro. Em
seguida, exiba-o no formato de uma citação bibliográca com o sobrenome,
seguido pelas iniciais do nome.
*/
function gerarCitacao(){
    var inNome = document.getElementById("inNome");
    var outCitacao = document.getElementById("outCitacao");

    var nome = inNome.value;
    if(nome == "" && nome.indexOf(" ") == -1){
        alert("Por favor, digite um número válido");
        inNome.focus();
        return;
    }
    
    var partes = nome.toUpperCase().split(" ");
    tamanho =  partes.length;

    var resposta = "";
    for(i = 0; i < partes.length - 1; i++){
        resposta += partes[i].charAt(0) + ". ";
    }
    
    outCitacao.textContent = "Citação Bibliográfica: " + partes[tamanho-1] + ", " + resposta;
    }
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCitacao);