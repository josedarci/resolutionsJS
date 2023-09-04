class QState {
  constructor(rr, cc, tt, ff, dd) {
    this.r = rr; // Posição vertical
    this.c = cc; // Posição horizontal
    this.t = tt; // Tempo
    this.from = ff; // Estado anterior
    this.d = dd; // Direção
  }
}

function solution(state) {
  const st = new Array(state.length);
  for (let i = 0; i < st.length; ++i) {
    st[i] = state[i].split(""); // Convertendo cada linha em um array de caracteres
  }
  const mark = new Array(st.length)
    .fill(0)
    .map(() => new Array(st[0].length).fill(false)); // Array para marcar células com água
  const q = []; // Fila para processar estados

  // Adicionando estados iniciais (fontes) na fila
  for (let r = 0; r < st.length; ++r) {
    for (let c = 0; c < st[0].length; ++c) {
      const ch = st[r][c];
      if ("a" <= ch && ch <= "z") {
        q.push(new QState(r, c, 0, null, ch.toUpperCase())); // Criando um estado de fonte
      }
    }
  }

  let endTime = 100000; // Tempo limite de execução
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // Direções (direita, esquerda, baixo, cima)
  const val = ["2457", "2367", "1567", "1347"]; // Possíveis conexões para cada direção

  for (let i = 0; i < q.length; ++i) {
    const s = q[i]; // Estado atual

    if (s.t >= endTime) {
      // Verificando se o tempo excedeu o limite
      break;
    }

    if (s.from === null) {
      // Se é uma fonte
      for (let a = 0; a < dirs.length; ++a) {
        const nr = s.r + dirs[a][0];
        const nc = s.c + dirs[a][1];

        if (
          nr < 0 ||
          nr >= st.length ||
          nc < 0 ||
          nc >= st[0].length ||
          val[a].indexOf(st[nr][nc]) === -1
        ) {
          continue; // Ignorando direções inválidas
        }

        q.push(new QState(nr, nc, s.t + 1, s, s.d)); // Adicionando novo estado à fila
      }
    } else {
      // Se não é uma fonte
      const ch = st[s.r][s.c];
      if ("A" <= ch && ch <= "Z") {
        // Se é um destino
        if (ch !== s.d) {
          endTime = s.t; // Definindo tempo de término se não for o destino correto
        }
      } else if (ch === "0") {
        // vazamento
      } else {
        // Se é um cano
        mark[s.r][s.c] = true; // Marcando a célula como contendo água
        const next = f(ch, s.from, s); // Obtendo a próxima posição
        const nr = next[0];
        const nc = next[1];

        if (nr < 0 || nr >= st.length || nc < 0 || nc >= st[0].length) {
          endTime = s.t + 1; // Verificando se há vazamento para fora do mapa
          continue;
        }

        if (st[nr][nc] === "0") {
          endTime = s.t + 1; // Verificando se há vazamento para um espaço vazio
        }

        q.push(new QState(nr, nc, s.t + 1, s, s.d)); // Adicionando novo estado à fila
      }
    }
  }

  let cnt = 0;
  for (let r = 0; r < st.length; ++r) {
    for (let c = 0; c < st[0].length; ++c) {
      cnt += mark[r][c] ? 1 : 0; // Contando células com água
    }
  }

  return endTime === 100000 ? cnt : -cnt; // Retornando o resultado final
}

// Função para calcular próxima posição baseada no tipo de cano
function f(c, f, t) {
  const ret = [t.r, t.c];

  if (c === "1" || c === "2" || c === "7") {
    ret[0] += t.c === f.c ? t.r - f.r : 0;
    ret[1] += t.r === f.r ? t.c - f.c : 0;
  }

  // ... outras verificações para diferentes tipos de canos ...

  return ret;
}
