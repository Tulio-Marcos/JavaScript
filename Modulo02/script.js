var valor1 = parseInt(prompt("Digite o Primeiro Numero"));
var operador = (prompt("Digite Operador "));
var valor2 = parseInt(prompt("Digite o Segundo Numero"));

var resultado;


switch(operador){
  case '+': 
    resultado = valor1 + valor2;
    alert(resultado);
    break;

  case '-': 
    resultado = valor1 - valor2;
    alert(resultado);
    break;

  case '*': 
    resultado = valor1 * valor2;
    alert(resultado);
    break;

  case '/':
    resultado = valor1 / valor2;
    modulo= valor1 % valor2;
    alert(resultado+' Resta ' + modulo);
    break
}
