var noticias = [];
function adicionarNoticia(){
    var inNoticia = document.getElementById("inNoticia");
    var outResposta = document.getElementById("outResposta");

    var noticia = inNoticia.value;
    

    if(noticia == ""){
        alert("Por favor, digite um número válido");
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);

    if(noticias.length == 0){
        alert("Não há nenhuma notícia");
        return;
    }

    outResposta.textContent = "Notícias Cadastradas: " + noticias.length;

    console.log(noticias);
    inNoticia.value = "";
    inNoticia.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticia);

function listarNoticias(){
    var outLista = document.getElementById("outLista");
    var total = noticias.length;
    if(total == 0){
        alert("Não há nenhuma notícia");
        return;
    }

    do{
        var numero = Number(prompt("Número de notícias que deseja visualizar"));
      if(isNaN(numero) || numero == 0 || numero > total){
        alert("Por favor, digite um número válido!");
      }
    }while(isNaN(numero) || numero == 0 || numero > total);

    var lista ="";
    for(var i = (total - 1); i >= (total - numero); i--){
        lista += (i + 1) + "º)" + noticias[i] + "\n";
    }
    outLista.textContent = numero + " Últimas Notícias\n -----------------------------------\n" + lista;
}
   
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarNoticias);