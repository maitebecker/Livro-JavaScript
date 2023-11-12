/*
Elaborar um programa que leia nome e número de acertos de candidatos
inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no
botão Aprovados 2ª Fase, ler o número de acertos para aprovação dos
candidatos para a 2ª fase do concurso, conforme ilustra a Figura 5.14. O
programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que
obtiveram nota maior ou igual à nota informada. Exibir os candidatos
aprovados em ordem decrescente de número de acertos (Figura 5.15). Caso
nenhum candidato tenha sido aprovado, exibir mensagem
*/
var candidatos = [];
function adicionarCandidatos(){
    var inCandidato = document.getElementById("inCandidato");
    var inAcertos = document.getElementById("inAcertos");

    var nome = inCandidato.value;
    var acertos = Number(inAcertos.value);

    if(nome == "" || isNaN(acertos)){
        alert("Por favor, digite um número válido!");
        inCandidato.focus();
        return;
    }

    candidatos.push({nome: nome, acertos: acertos});

    inCandidato.value = "";
    inAcertos.value = "";
    listarCandidatos();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidatos);

function listarCandidatos(){
    if(candidatos.length == 0){
        alert("Não há candidatos na lista!");
        return;
    }

    var lista = "";
    for(var i =0; i < candidatos.length; i++){
        lista += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
    }

    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCandidatos);

function listarAprovados(){
    if(candidatos.length == 0){
        alert("Não há candidatos na lista!");
        return;
    }

    do{
      var acertos = Number(prompt("Número de Acertos para Aprovação?"));  
      if(isNaN(acertos) || acertos == 0){
        alert("Por favor, digite um número válido!");
      }
    }while(isNaN(acertos) || acertos == 0);
    

    var copia = [];
    copia = candidatos.slice();
    copia.sort(function (a,b){return a.acertos - b.acertos});
    copia.reverse();

    var lista = "";
    var aprovados = false;
   for(var i = 0; i < copia.length; i++){
    if(copia[i].acertos >= acertos){
        lista += copia[i].nome + " - " + copia[i].acertos + " acertos\n";
        aprovados = true;
    }
   }
   if(!aprovados){
        lista = "Nunhum candidato aprovado!";
   }
   document.getElementById("outLista").textContent = lista;
}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", listarAprovados);