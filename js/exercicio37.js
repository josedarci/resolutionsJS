function solution(t) {
  const num = []; // Lista para armazenar os valores dos nós
  const lvl = []; // Lista para armazenar as profundidades dos nós
  const st = []; // Pilha para rastrear os parênteses
  let i = 0; // Variável de índice para percorrer a notação da árvore

  while (i < t.length) {
    if (t[i] === " ") {
      i++; // Ignora os espaços em branco
      continue;
    }
    if (t[i] === "(") {
      st.push(t[i]); // Abre um nível de profundidade
      i++;
    } else if (t[i] === ")") {
      st.pop(); // Fecha um nível de profundidade
      i++;
    } else {
      let x = 0;
      while ("0" <= t[i] && t[i] <= "9") {
        x = x * 10 + parseInt(t[i]);
        i++;
      }
      num.push(x); // Extrai o valor do nó
      lvl.push(st.length); // Armazena a profundidade do nó
    }
  }

  const botLvl = Math.max(...lvl); // Calcula a profundidade máxima
  const result = [];
  for (let i = 0; i < num.length; i++) {
    if (lvl[i] === botLvl) {
      result.push(num[i]); // Adiciona os valores dos nós na profundidade máxima ao resultado
    }
  }
  return result;
}

const t = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))";
console.log(solution(t)); // Output: [5, 11, 4]
