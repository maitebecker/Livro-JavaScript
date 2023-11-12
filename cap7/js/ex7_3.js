/* 
Ele deve ler modelo, ano de fabricação e preço do veículo (o valor que
o proprietário deseja receber pelo veículo). Em seguida, o programa deve
classicar o veículo como: “Novo” (do ano atual), “Seminovo” (até 2 anos
de uso) ou “Usado”. Também deve apresentar o preço de venda do veículo
com um acréscimo de 8% no preço dos veículos novos ou de 10% no
preço dos veículos classicados como seminovos ou usados. Para a
classicação e o cálculo do preço de venda do veículo, serão utilizadas
funções com retorno de valor.
*/
function mostrarDados(){
    var inModelo =  document.getElementById("inModelo");
    var inAno =  document.getElementById("inAno");
    var inPreco =  document.getElementById("inPreco");
    var outClasse =  document.getElementById("outClasse");
    var outPreco =  document.getElementById("outPreco");

    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);

    if(modelo == "" || ano == 0 || isNaN(ano) || preco == 0 || isNaN(preco)){
        alert("Por favor, digite um valor válido");
        inModelo.focus();
        return;
    }

    var classificacao =  classificarVeiculo(ano);
    outClasse.textContent = modelo + " - " + classificacao;

    var PrecoVenda = calcularPreco(preco, classificacao);
    outPreco.textContent =  "Preço de Venda R$: " + PrecoVenda.toFixed(2);
    
}
var btCalcular =  document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDadoso);

function classificarVeiculo(anoFabricacao){
    var hoje = new Date();
    var ano = hoje.getFullYear();
    var classe = "";
    if(anoFabricacao == ano){
        classe = "Novo";
    }else if(anoFabricacao >= (ano - 2)){
        classe = "Seminovo";
    }else{
        classe = "Usado";
    }
   return classe;
}

function calcularPreco(precoProprietario, classe){
    var acrescimo = 0;
    var preco = 0;
    if(classe == "Novo"){
        acrescimo = 0.08 * precoProprietario;
    }else if(classe == "Seminovo" || classe == "Usado"){
        acrescimo = 0.1 * precoProprietario;
    }
    preco = precoProprietario + acrescimo;
    return preco;
}