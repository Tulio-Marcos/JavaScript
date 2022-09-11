function Pessoa (nome,idade,sexo){
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;

  this.dadosPessoa = () => {
    console.log(`  nome:${this.nome}  idade:${this.idade}   sexo:${this.sexo } `)
  }
}

var pessoa = new Pessoa('tulio', 25, 'M');
pessoa.dadosPessoa();



var alunos = ['tulio','ryan','amanda'];
alunos.forEach(function(item){
  console.log(item);
});
