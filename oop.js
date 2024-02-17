function oop() {
  console.log("=================== OOP ====================");
  console.log("=================== OOP ====================");
  
  console.log("====== es5 ======");
  const p1 = new Pessoa("Emilio", 123456);
  console.log(p1.toString());

  console.log("===== es6+ ======");
  const p2 = new PessoaEs6("EmilioEs6", 666666);
  console.log(p2.toString());

  console.log("=================== OOP ====================");
  console.log("=================== OOP ====================");
}

function Pessoa(nome, telefone) {
  this.nome = nome;
  this.telefone = telefone;

  this.toString = function () {
    return this.nome + "::" + this.telefone;
  };
}

class PessoaEs6 {
  constructor(nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
  }

  toString() {
    return `${this.nome}::${this.telefone}`;
  }
}

module.exports = {
  oop,
};
