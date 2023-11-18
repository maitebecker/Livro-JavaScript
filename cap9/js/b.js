/*
Elaborar um programa que leia um nome e, ao clicar no botão Exibir Partes
do Nome, insira linhas de cabeçalho h3 na página com as partes do nome em
cores aleatórias. Ao clicar no botão, o programa deve vericar a existência de
linhas de cabeçalho h3 na página, excluindo-as se houver
*/
function exibirNome(){
    var h3 = document.getElementsByTagName("h3");
    var divNome = document.getElementById("divNome");

    var inNome = document.getElementById("inNome");
    var nome = inNome.value;

    var partes = nome.split(" ");
     
    if(nome == "" || partes.length == 1){
        alert("Informe o nome completo!");
        inNome.focus();
        return;
    }
    
    for(var i = h3.length-1; i>=0; i--){
       divNome.removeChild(h3[i]);
    }
    
    mostrarNome(partes, divNome);
    inNome.value = "";
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirNome);

function mostrarNome(partes, pai){
    var cores = ["red", "green", "yellow", "blue", "violet"];
    var corSorteada;
    for(var i = 0; i < partes.length; i++){
        var h3 = document.createElement("h3");
        corSorteada = Math.floor(Math.random()*5);
        h3.style.color = cores[corSorteada];
        var texto = document.createTextNode(partes[i]);
        h3.appendChild(texto);
        pai.appendChild(h3);
    }
}




