/*
Elaborar um programa para cadastrar os serviços a serem realizados por
um auto center, que organize a ordem de execução dos serviços. Armazenar
os serviços no navegador do usuário e a cada clique no botão Executar Serviço
remover o primeiro serviço e exibi-lo na página. O programa deve atualizar
o número de serviços pendentes quando: a) a página for aberta; b) um
serviço for incluído; c) um serviço for removido
*/
function adicionarServico() {
    var inServico = document.getElementById("inServico");
    var servico = inServico.value;

    if (servico == "") {
        alert("Adicione um serviço!");
        inServico.focus();
        return;
    }

    if (verServicoExiste(servico)) {
        alert("O serviço já está na lista!");
        inServico.focus();
        return;
    }

    if (localStorage.getItem("adicionarServico")) {
        var adicionarServico = localStorage.getItem("adicionarServico") + ";" + servico;
        localStorage.setItem("adicionarServico", adicionarServico);
    } else {
        localStorage.setItem("adicionarServico", servico);
    }

    calcularPendentes();
    inServico.value = "";
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarServico);


function verServicoExiste(servico) {
    var existe = false;
    if (localStorage.getItem("adicionarServico")) {
        var servicos = localStorage.getItem("adicionarServico").split(";");
        for (var i = 0; i < servicos.length; i++) {
            servicos[i].toLocaleLowerCase();
        }
        for (var i = 0; i < servicos.length; i++) {
            if (servicos.indexOf(servico.toLowerCase()) >= 0) {
                existe = true;
            }
        }
    }
    return existe;
}

function calcularPendentes() {
    var outPendentes = document.getElementById("outPendentes");
    var cont;

    if (localStorage.getItem("adicionarServico")) {
        cont = localStorage.getItem("adicionarServico").split(";").length;
    } else {
        cont = 0;
    }
    outPendentes.textContent = "Serviços Pendentes: " + cont;
}
calcularPendentes();

function executarServico() {
    var outExecucao = document.getElementById("outExecucao");

    if (!localStorage.getItem("adicionarServico")) {
        alert("Não há serviços para executar!");
        return;
    }
    var servicos = localStorage.getItem("adicionarServico").split(";");
    var execucao = servicos.shift();

    outExecucao.textContent = execucao;

    localStorage.setItem("adicionarServico", servicos.join(";"));

    calcularPendentes();
}
var btExecutar = document.getElementById("btExecutar");
btExecutar.addEventListener("click", executarServico);