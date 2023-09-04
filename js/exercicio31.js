function solution(rules) {
  // Define a expressão regular para identificar partes das fórmulas
  var pattern = /(\d*)d(\d+)([+-]\d+)?/g;

  // Executa a expressão regular na string "rules" para buscar correspondências
  var formula = pattern.exec(rules);

  // Inicializa a variável "res" para armazenar o resultado final
  var res = 0;

  // Loop para processar todas as fórmulas encontradas
  while (formula) {
    // Extrai os valores das partes da fórmula (A, X e B)
    var rolls = formula[1] ? parseInt(formula[1]) : 1; // A (número de vezes que o dado é rolado)
    var dieType = parseInt(formula[2]); // X (número de faces no dado)
    var formulaMax = rolls * dieType; // Valor máximo sem adição/subtração

    // Verifica se há um valor de adição/subtração (B)
    if (formula[3]) {
      if (formula[3][0] === "-") {
        formulaMax -= parseInt(formula[3].slice(1)); // Subtrai o valor de B
      } else {
        formulaMax += parseInt(formula[3].slice(1)); // Adiciona o valor de B
      }
    }

    // Adiciona o valor máximo calculado à variável "res"
    res += formulaMax;

    // Executa a expressão regular novamente para buscar a próxima fórmula
    formula = pattern.exec(rules);
  }

  // Retorna o resultado final
  return res;
}

// Teste
var rules =
  "Roll d6-3 and 4d4+3 to pick a weapon, and finish the boss with 3d7!";
var result = solution(rules);
console.log(result);
