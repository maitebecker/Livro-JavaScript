/*
Elaborar um programa para cadastrar produtos na lista de compras da
semana. Salvar e exibir a listagem dos produtos em ordem alfabética.
*/
function adicionarProdutos(){
    var inProduto = document.getElementById("inProduto");


    var produto = inProduto.value;
    if(produto == ""){
        alert("Digite o produto");
        inProduto.focus();
        return;
    }


    if(verProdutoExiste(produto)){
        alert("Produto já está na lista");
        inProduto.focus();
        return;
    }


    if(localStorage.getItem("produtoAdicionado")){
        var produtoAdicionado = localStorage.getItem("produtoAdicionado") + ";" + produto;
        localStorage.setItem("produtoAdicionado", produtoAdicionado);
    }else{
        localStorage.setItem("produtoAdicionado", produto);
    }


    exibirProdutos();
    inProduto.value = "";


}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProdutos);


function verProdutoExiste(produto){
    var existe = false;


    if(localStorage.getItem("produtoAdicionado")){
        var produtos = localStorage.getItem("produtoAdicionado").split(";");
        for(var i = 0; i < produtos.length; i++){
           produtos[i].toLocaleLowerCase();
        }
        if(produtos.indexOf(produto.toLowerCase())>= 0){
            existe = true;
        }
    }
    return existe;
}


function exibirProdutos(){
    var outProdutos = document.getElementById("outProdutos");


    if(!localStorage.getItem("produtoAdicionado")){
        outProdutos.textContent = "";
        return;
    }


    var produtos = localStorage.getItem("produtoAdicionado").split(";");
    var produtosOrdem = produtos.sort();
    var lista = "";
    for(var i = 0; i < produtosOrdem.length; i++){
        lista += produtosOrdem[i] + "\n";
    }


    outProdutos.textContent = "Produtos Adicionados\n" + "--------------------------------\n" + lista;
}
exibirProdutos();


function limparLista(){
    if(confirm("Limpar todos os itens da lista?")){
        localStorage.removeItem("produtoAdicionado");
        exibirProdutos();
    }


}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);





