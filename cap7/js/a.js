/*
Elaborar um programa que leia o nome e a idade de um atleta de um
clube de natação. O programa deve exibir o nome com “-” abaixo das letras
do nome e a categoria do atleta, que pode ser “Infantil” (até 12 anos),
“Juvenil” (entre 13 e 18 anos) ou “Adulto” (acima de 18 anos). O programa
deve conter as funções:
• retornarTracos() – que receba um nome como parâmetro e retorne
uma linha com “-” para as letras do nome (nos espaços, manter os
espaços).
• categorizarAluno() – que receba um número como parâmetro e
retorne a categoria do aluno, conforme indicação no enunciado do
exercício.
*/
function lerAtleta(){
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");
    var outNome = document.getElementById("outNome");
    var outTraco = document.getElementById("outTraco");
    var outCategoria = document.getElementById("outCategoria");

    nome = inNome.value;
    idade = Number(inIdade.value);

    if(nome == "" || idade == 0 || isNaN(idade)){
        alert("Por favor, digite um número válido!");
        inNome.focus();
        return;
    }

    outNome.textContent = nome; 
    outTraco.textContent =  retornarTracos(nome);
    outCategoria.textContent = "Categoria: " + categorizarAluno(idade);

}
var btCategorizar = document.getElementById("btCategorizar");
btCategorizar.addEventListener("click", lerAtleta);

function retornarTracos(nomeAtleta){
    var tamanho = nomeAtleta.length;
    var traco = "";
    
    for(var i = 0; i < tamanho; i++){
        if(nomeAtleta.charAt(i) !== " "){
            traco += "-"
        }
        else{
            traco += " "
        }
    }

    return traco;
}

function categorizarAluno(idadeAluno){
    var categoriaAluno = "";
    if(idadeAluno <= 12){
        categoriaAluno = "Infantil";
    }else if(idadeAluno <= 18){
        categoriaAluno = "Juvenil";
    }else{
        categoriaAluno = "Adulto";
    }

    return categoriaAluno;
}
