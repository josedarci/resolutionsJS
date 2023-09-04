function solution(code, args) {
    // Junta os argumentos em uma única string separada por '|'
    var argumentVariants = args.join('|');
    
    // Cria uma expressão regular que busca os argumentos e os substitui
    // A expressão regular é composta da seguinte forma:
    // - \\$? significa que o símbolo $ pode estar presente (ou não) no início do padrão
    // - (?<![a-zA-Z0-9_]) é uma afirmação de lookbehind negativa para garantir que o argumento não tenha caracteres alfanuméricos ou '_' antes dele
    // - (${argumentVariants}) é o grupo de captura para encontrar um dos argumentos listados em args
    // - (?![a-zA-Z0-9_]) é uma afirmação de lookahead negativa para garantir que o argumento não tenha caracteres alfanuméricos ou '_' após ele
    // - 'g' é a flag global para substituir todas as ocorrências
    var pattern = new RegExp(\\$?(?<![a-zA-Z0-9_])(${argumentVariants})(?![a-zA-Z0-9_]), 'g');
    
    // O substituto '$$$1' acrescenta dois símbolos $ ($$) para que um $ final seja interpretado corretamente
    // O '$1' refere-se ao primeiro grupo de captura da expressão regular
    var sub = '$$$1';
    
    // Substitui todos os padrões encontrados na string de código pela versão com '$' adicional
    return code.replace(pattern, sub);
  }
  // Test case
  var code = "function add($n, m) {\t return n + $m;\t}";
  var args = ["n", "m"];
  var result = solution(code, args);
  console.log(result);
  