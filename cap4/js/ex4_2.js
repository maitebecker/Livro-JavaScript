function decrescernumeros() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";
    for (var i = numero; i > 1; i--) {
        resposta = resposta + i + ", ";
    }
    resposta = resposta + i + ". ";

    /*
    var resposta = "Entre " + numero + " e 1: " + numero;
    for (var i = numero - 1; i > 0; i--) {
        resposta = resposta + ", " + i;
    }
    resposta = resposta + "."
    */
    outResposta.textContent = resposta;
}
btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", decrescernumeros);