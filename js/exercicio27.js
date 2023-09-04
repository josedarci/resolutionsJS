// Função para verificar se uma string s é uma subsequência de uma string t
function solution(t, s) {
    // Inicializa uma string vazia para armazenar o padrão da expressão regular
    var pattern = "";
    
    // Loop através dos caracteres da string s
    for (var i = 0; i < s.length; i++) {
      // Adiciona o caractere atual ao padrão, envolto por colchetes,
      // seguido do curinga ".*" para representar qualquer sequência de caracteres
      pattern += "[" + s.charAt(i) + "].*";
    }
    
    // Cria um objeto de expressão regular usando o padrão construído
    var re = new RegExp(pattern);
    
    // Retorna true se a expressão regular corresponder à string t, caso contrário, retorna false
    return re.test(t);
  }
  
  // Testa a função com strings de exemplo
  console.log(solution("he sd.f dsk e8.sd??l23, 23,f.s++83+", "h  8.?*3+")); // Saída: true
  