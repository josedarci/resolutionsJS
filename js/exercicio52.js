function solution(table, row, column) {
  // Expressões regulares para encontrar as tags <table>, <tr> e <td>
  const tableRegex = /<table>(.*?)<\/table>/g;
  const rowRegex = /<tr>(.*?)<\/tr>/g;
  const cellRegex = /<td>(.*?)<\/td>/g;

  // Procura pela tag <table> no conteúdo fornecido
  const tableMatches = table.match(tableRegex);
  if (!tableMatches) {
    return "No such cell";
  }

  // Obtém todas as linhas (<tr>) dentro da tag <table>
  const rows = tableMatches[0].match(rowRegex);
  if (!rows || row >= rows.length) {
    return "No such cell";
  }

  // Obtém todas as células (<td>) na linha especificada
  const cells = rows[row].match(cellRegex);
  if (!cells || column >= cells.length) {
    return "No such cell";
  }

  // Extrai o conteúdo da célula especificada e remove as tags <td>
  const content = cells[column].replace(/<\/?td>/g, "");
  return content;
}

// Casos de teste
const table1 =
  "<table><tr><td>1</td><td>TWO</td></tr><tr><td>three</td><td>FoUr4</td></tr></table>";
console.log(solution(table1, 0, 1)); // Saída: "TWO"

const table2 = "<table><tr><td>1</td><td>TWO</td></tr></table>";
console.log(solution(table2, 1, 0)); // Saída: "No such cell"
