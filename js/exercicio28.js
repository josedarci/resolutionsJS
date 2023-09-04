function solution(pairOfLines) {
    // Cria uma expressão regular para capturar os três últimos caracteres de cada linha em um par de linhas.
    // A expressão regular /^.*(.{3})\t.*(.{3})$/ é usada para isso.
    // O ^ indica o início da linha, .* captura qualquer número de caracteres, (.{3}) captura exatamente três caracteres,
    // \t captura o caractere de tabulação e .* captura qualquer número de caracteres novamente.
    // Finalmente, (.{3}) captura exatamente três caracteres no final da segunda linha.
    var re = /^.*(.{3})\t.*(.{3})$/;
    
    // Executa a expressão regular na entrada pairOfLines para encontrar os padrões correspondentes.
    var match = re.exec(pairOfLines);
    
    // Retorna true se os três últimos caracteres da primeira linha forem iguais aos três últimos caracteres da segunda linha.
    return match[1] == match[2];
  }
  