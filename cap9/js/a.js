/*
Criar dez imagens de números (de 0 a 9) como se fossem velas de
aniversário e salvá-las na pasta img. Em seguida, elaborar um programa que
leia uma idade e insira as imagens correspondentes na página conforme o
número informado. O programa deve permitir idades entre 1 e 120 anos
*/
function exibirVelas(){
    var inIdade = document.getElementById("inIdade");
    var idade = Number(inIdade.value);

    if(idade == 0 || isNaN(idade) || idade > 120){
        alert("Digite um valor válido! Entre 1 e 120 anos");
        inIdade.focus();
        return;
    }

    var divQuadro = document.getElementById("divQuadro");

    for(var i = 0; i < (idade.toString().length); i++){
        var img = document.createElement("img");
        img.src = "img/" + idade.toString().charAt(i) + ".jpg";
        img.alt = "Vela de " + idade.toString().charAt(i) + " anos";
        divQuadro.appendChild(img);
    }

    btExibir.disabled = true;
    btNovasVelas.focus();
}
var btExibir = document.getElementById("btExibir"); 
btExibir.addEventListener("click",exibirVelas);

var btNovasVelas = document.getElementById("btNovasVelas"); 
btNovasVelas.addEventListener("click",function () {
    location.reload();
});