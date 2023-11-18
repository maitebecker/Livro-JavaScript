/*
Elaborar um programa que leia o nome de um clube e, ao clicar em
Adicionar, insira-o na página a partir de uma tag h5 (alinhada à direita e em
itálico). Ao clicar em Montar Tabela de Jogos, o programa deve vericar se o
número de tags h5 existentes na página é par. Se for, exiba os jogos (na ordem
de inserção) em uma tabela, também inserida pelo programa na página. Os
clubes devem ser recuperados das tags h5 existentes na página. Se o número
de tags h5 for ímpar, exiba mensagem de advertência. Depois de montar a
tabela, o programa deve desabilitar os botões Adicionar e Montar Tabela de Jogos.
*/
function adicionarClubes(){
    var inClube = document.getElementById("inClube");
    var clube = inClube.value;

    if(clube == ""){
        alert("Informe o nome do clube");
        inClube.focus();
        return;
    }

    var divClube = document.getElementById("divClube");
    var h5 = document.createElement("h5");
    h5.className = "aDireita";
    h5.style.fontStyle = "italic"
    var texto = document.createTextNode(clube);
    h5.appendChild(texto);
    divClube.appendChild(h5);
    inClube.value = "";
    inClube.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClubes);

function montarTabela(){
    var divClube = document.getElementById("divClube");
    var h5 = divClube.getElementsByTagName("h5");

    if (h5.length == 0 || h5.length % 2 == 1) {
        alert("O número de clubes inseridos deve ser par");
        return;
    }

    var novoH3 = document.createElement("h3");
  var texto = document.createTextNode("Tabela de Jogos");
  novoH3.appendChild(texto);
  divClube.appendChild(novoH3);

  var novaTable = document.createElement("table");
  novaTable.className = "table table-striped";
  divClube.appendChild(novaTable);

  for (var i = 0; i < h5.length; i++) {
    if (i % 2 == 0) {
      var linha = novaTable.insertRow(-1);
      var col1 = linha.insertCell(0);
      col1.textContent = h5[i].textContent;
    } else {
      var col2 = linha.insertCell(1);
      col2.textContent = h5[i].textContent;
    }
  }

  btAdicionar.disabled = true;
  btMontar.disabled = true;
  btNovosClubes.focus();
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);

var btNovosClubes = document.getElementById("btNovosClubes");
btNovosClubes.addEventListener("click", function() {
  location.reload();
});

