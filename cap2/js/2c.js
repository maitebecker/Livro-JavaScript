/*
Para aumentar suas vendas no setor de higiene, cada etiqueta 
de produto deve exibir uma mensagem anunciando 50% de desconto (para um item)
na compra de três unidades do produto. Elaborar um programa que leia descrição 
e preço de um produto. Após, apresente as mensagens indicando a promoção.
*/

function verPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outProduto = document.getElementById("outProduto");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var valorProduto = preco * 0.5;
    var valorTotal = (preco * 2) + valorProduto;

    outPromocao.textContent = produto + " - Promoção leve 3 por R$: " + valorTotal.toFixed(2);
    outProduto.textContent = "O 3° produto custa apenas R$: " + valorProduto.toFixed(2);
}

var btVer= document.getElementById("btVer");
btVer.addEventListener("click", verPromocao);
