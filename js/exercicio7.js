function solution(n, m) {
    // Calcular o número de pedaços de doce que cada criança vai comer
    let docesPorCrianca = Math.floor(m / n);
  
    // Calcular o número total de pedaços de doce consumidos por todas as crianças
    let totalDocesConsumidos = docesPorCrianca * n;
  
    return totalDocesConsumidos;
  }
  