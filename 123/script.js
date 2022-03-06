function calculo() { //Inicia a função
    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    parseFloat(altura, peso)
    parseFloat(calcular)
var calcular = peso / altura ** 2;
if(nome, altura, peso == 0){ //caso nada seja inserido nos input
    document.getElementById("resultado").innerHTML = "<p>" + "Insira variavéis corretas!"  + "</p>"
 }

if (calcular >= 18,5 && calcular <= 24.9){   // condicionais
    document.getElementById("resultado").innerHTML = "<p>" + nome + ", você está no peso correto, parabéns!" + "</p>"
}
     if (calcular < 18.5) {
      document.getElementById("resultado").innerHTML = "<p>" + nome + ", você está abaixo do peso!" + "</p>"
    }  if(calcular > 24.9) {
        document.getElementById("resultado").innerHTML = "<p>" + nome + ", você está acima do peso indicado" + "</p>"
    } 

    document.getElementById("nome").value= ""; //zera o input após o click
    document.getElementById("altura").value= "";
    document.getElementById("peso").value = "";
}
