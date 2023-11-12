/*
Você deve desenvolver um programa de criptograa para transmitir
mensagens entre amigos. O programa deve ler uma mensagem e, em seguida,
exibi-la criptografada. A criptograa consiste em: a) exibir todas as letras das
posições pares da mensagem; b) exibir todas as letras das posições ímpares da
mensagem. A Figura 6.15 exibe a mensagem criptografada. O programa deve
conter ainda um botão para decriptografar a mensagem, ou seja, retornar a
mensagem original a partir do texto cifrado
 */
function criptografarMensagem() {
    var inMensagem = document.getElementById("inMensagem");
    var outResposta = document.getElementById("outResposta");

    var mensagem = inMensagem.value;

    if (mensagem == "") {
        alert("Por favor, digite uma mensagem");
        inMensagem.focus;
        return;
    }

    var tamanho = mensagem.length;

    var resposta = "";
    for (var i = 0; i <= tamanho - 1; i++) {
        if (i % 2 == 1) {
            resposta += mensagem.charAt(i).toLowerCase();
        }
    }

    for (var i = 0; i < tamanho - 1; i++) {
        if (i % 2 == 0) {
            resposta += mensagem.charAt(i).toLowerCase();
        }
    }

    outResposta.textContent = resposta;
}
var btCriptografar = document.getElementById("btCriptografar");
btCriptografar.addEventListener("click", criptografarMensagem);

function decriptografarMensagem() {
    // cria referência ao campo de entrada e obtém conteúdo
    var inMensagem = document.getElementById("inMensagem");
    var mensagem = inMensagem.value;

    if (mensagem == "") {
        alert("Informe a mensagem...");
        inMensagem.focus();
        return;
    }

    var tam = mensagem.length;
    var metade = Math.floor(tam / 2);
    var resposta = "";

    if (tam % 2 == 0) {
        for (var i = metade; i < tam; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
    } else {
        for (var i = metade; i < tam - 1; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
        resposta += mensagem.charAt(i);
    }

    document.getElementById("outResposta").textContent = resposta;
}
var btDescriptografar = document.getElementById("btDescriptografar");
btDescriptografar.addEventListener("click", decriptografarMensagem);