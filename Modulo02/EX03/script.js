var valor1 = parseInt(prompt("Digite sua primeira nota"));
var valor2 = parseInt(prompt("Digite sua segunda nota "));
var valor3 = parseInt(prompt("Digite sua terceira nota"));
var media = (valor1 + valor2 +valor3)/3

if (media < 7 ){
    alert("você está Reprovado");
}else if( media >= 7){
    alert("Você está Aprovado")
}


valor1 = parseInt(prompt("Digite uma Nota"));
valor2 = parseInt(prompt("Digite uma nota"));
media = (valor1+valor2)

valor3  = (21 - media)
alert("faltam Pontos "+valor3)