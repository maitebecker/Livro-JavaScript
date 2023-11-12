/*
Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas
(no horário de verão na França), elaborar um programa que leia a hora no
Brasil e informe a hora na França. 
*/

function exibirHora() {
    var inHora = document.getElementById("inHora");
    var outHora = document.getElementById("outHora");

    var hora = Number(inHora.value);

    if(hora == 0 || isNaN(hora)){
        alert("Por favor, informe a hora corretamente...");
        inHora.focus();
        return;
    }

    var horaFranca = hora + 5;

    if(horaFranca > 24){
        horaFranca -= 24;
    }
    outHora.textContent = "Hora na França:" + horaFranca.toFixed(2);

}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirHora);