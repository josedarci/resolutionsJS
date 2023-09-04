function solution(picture) {
    // Obtém a largura da matriz (comprimento das strings na matriz)
    const width = picture[0].length;
  
    // Cria uma string de asteriscos para a borda com base na largura + 2 (para os asteriscos nos cantos)
    const border = '*'.repeat(width + 2);
  
    // Retorna um novo array contendo a matriz original com bordas de asteriscos
    return [
      border, // Adiciona a borda superior
      ...picture.map(row => *${row}*), // Mapeia cada linha da matriz para adicionar asteriscos nas bordas
      border // Adiciona a borda inferior
    ];
  }
  