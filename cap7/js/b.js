/*
Elaborar um programa que leia o nome completo de um aluno. O
programa deve validar o preenchimento de um nome completo e exibir a
senha inicial do aluno, a qual será o sobrenome seguido pelo número de
vogais do nome completo dele. O programa deve conter as funções:
• validarNome() – que receba um nome como parâmetro e retorne true
(nome completo) ou false (nome incompleto).
• obterSobrenome() – que receba um nome como parâmetro e retorne o
último nome do aluno em letras minúsculas.
• contarVogais() – que receba um nome e retorne o número de vogais
deste, com dois dígitos.
*/
function gerarSenha() {
    var inNome = document.getElementById("inNome");
    var outSenha = document.getElementById("outSenha");

    nome = inNome.value.toLowerCase();

    var validar = validarNome(nome);

    if (!validar) {
        alert("Por favor, informe o nome completo");
        inNome.focus();
        return;
    }

    var ultimoNome = obterSobrenome(nome);
    var vogais = contarVogais(nome);

    outSenha.textContent = "Senha Inicial: " + ultimoNome + vogais;

}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarSenha);

function validarNome(nomeAluno) {
    var flag = true;

    if (nome.indexOf(" ") == -1 || nome == "") {
        flag = false;
    }

    return flag;
}

function obterSobrenome(nomeAluno) {
    var partes = nomeAluno.split(" ");
    var tamanho = partes.length;

    var sobrenome = partes[tamanho - 1];

    return sobrenome;

    /* Outra opção de código:
     var sobrenome  = nome.lastIndexOf(" ");
     return nomeAluno.substr(sobrenome + 1);
    */
}

function contarVogais(nomeAluno) {
    var cont = 0;
    var caracter = "";

    for (var i = 0; i < nomeAluno.length; i++) {
        caracter = nomeAluno.charAt(i);
        if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
            cont++;
        }
    }

    if (cont < 10) {
        cont = "0" + cont;
    }

    return cont;

    /* outra forma de programar a função contarVogais():
    function contarVogais2(nome) {
     var num = 0;
     var vogais = "AEIOU";
     var letra;
     for (var i = 0; i < nome.length; i++) {
         letra = nome.charAt(i).toUpperCase();
        if (vogais.indexOf(letra) >= 0) {
          num++;
        }
    }
     return num < 10 ? "0" + num : num;
    }
     */
}
