/*
Na compra de duas unidades de um mesmo medicamento, o cliente recebe
como desconto os centavos do valor total. Elaborar um programa que leia 
descrição e preço de um medicamento. Informe o valor do produto na promoção. 
 */

function mostrarPromocao() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outPromocao = document.getElementById("outPromocao");

    var medicamento = inMedicamento.value;
    var preco= Number(inPreco.value);

    var promocao = Math.floor(preco * 2);

    outProduto.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por apemas R$: " + promocao;
}

var btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", mostrarPromocao);