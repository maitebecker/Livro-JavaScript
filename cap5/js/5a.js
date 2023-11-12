/*
Elaborar um programa para gerar uma tabela com os jogos de uma fase
eliminatória de um campeonato. O programa deve conter três funções (a
serem executadas no evento click de cada botão) para: 1) validar o
preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os
clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x
último, segundo x penúltimo e assim por diante. Exibir mensagem e não
listar a tabela de jogos, caso o número de clubes informados seja ímpar
*/
var clubes = [];

function adicionarClube() {
    var inClube = document.getElementById("inClube");
    var nome = inClube.value;
    
    if(nome == ""){
        alert("Digite o nome do clube!");
        inClube.focus();
        return;
    }

    clubes.push(nome);    
    
    inClube.value = "";
    inClube.focus();
    listarClube();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function listarClube(){
    if(clubes.length == 0){
        alert("Não há clubes na lista!");
        return;
    }

    var lista = "";
    for(var i = 0; i < clubes.length; i++){
        lista += (i+1) + ". " + clubes[i] + "\n";
    }
    document.getElementById("outResposta").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClube);

function montarTabela(){
    if(clubes.length == 0 || clubes.length % 2){
        alert("O número de clubes deve ser par");
        inClube.focus();
        return;
    }
    var tabela = ""
    var num = clubes.length - 1;
    for(var i = 0; i < clubes.length/2; i++){
        tabela += clubes[i] + " x " + clubes[num - i] + "\n";
    }

    document.getElementById("outResposta").textContent = tabela;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", montarTabela);