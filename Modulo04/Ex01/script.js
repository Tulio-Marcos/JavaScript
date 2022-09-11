var banco = {
  conta:1111211 ,
  saldo: 50,
  tipoDeConta: "corrente",

 buscarSaldo(){
  return this.saldo
 },
 deposito(valor){
   this.saldo= this.saldo + valor;

 },
 saque(valorSaque){
  this.saldo = this.saldo - valorSaque

 },
 numeroConta(){
  return this.conta
 }


}


console.log(banco.buscarSaldo());
console.log(banco.deposito(200));
console.log(banco.buscarSaldo());
console.log(banco.saque(100));
console.log(banco.numeroConta());
console.log(banco.buscarSaldo());

