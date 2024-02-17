function basics() {
  console.log("================== BASICS ==================");
  console.log("================== BASICS ==================");

  console.log("============numeros============");
  inteiro = 10;
  decimal = 10.5;
  console.log(inteiro + decimal);

  console.log("====== numeros especiais ======");
  infinite = Infinity;
  negativeInfinity = -Infinity;
  notNumber = NaN;
  console.log(infinite, negativeInfinity, notNumber);
  console.log(typeof infinite, typeof negativeInfinity, typeof notNumber);

  console.log("============ texto ============");
  simpleText = "simple";
  doubleQuotedText = "identical";
  interpolation = `${simpleText} + ${doubleQuotedText}`;
  console.log(interpolation);

  console.log("========= operadores ==========");
  small = 1;
  midSize = 2;
  big = 3;
  console.log("small > midSize", small > midSize); // false
  console.log("small < big", small < big); // true

  console.log("============ vazio ============");
  nothing = undefined;
  empty = null;
  console.log("nothing == empty", nothing == empty);
  console.log("nothing === empty", nothing === empty);

  console.log("========== conversões =========");
  console.log("10 * null =", 10 * null);
  console.log('"5" - 1 =', "5" - 1);
  console.log('"5" + 1 =', "5" + 1);
  console.log('"ten" * 1 =', "ten" * 1);

  console.log("========== variáveis ==========");
  const always = "always";
  let num = 10;
  console.log(num, always);
  num = 11;
  console.log(num, always);

  console.log("=========== funções ===========");
  function sum(a, b) {
    return a + b;
  }
  console.log("sum(1, 1) =", sum(1, 1));

  console.log("====== controle de fluxo ======");
  console.log(10, smallVsBig(10, 10));

  function smallVsBig(a, b) {
    if (sum(a, b) > 10) return "bigNumber";
    else return "smallNumber";
  }

  i = 0;
  while (i < 10) {
    console.log(i, smallVsBig(i, i));
    i++;
  }

  console.log("================== BASICS ==================");
  console.log("================== BASICS ==================");
}

module.exports = {
  basics,
};
