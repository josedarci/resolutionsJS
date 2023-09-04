function solution(expr) {
  const indexes = Array.from({ length: expr.length }, (_, i) => i);

  // Agrupa os índices com base na diferença entre o número de parênteses de abertura e fechamento
  const groupedIndexes = indexes.reduce((acc, index) => {
    const openParenCount = expr
      .substring(0, index)
      .split("")
      .filter((char) => char === "(").length;
    const closeParenCount = expr
      .substring(0, index)
      .split("")
      .filter((char) => char === ")").length;
    const parenDifference = openParenCount - closeParenCount;
    if (!acc[parenDifference]) {
      acc[parenDifference] = [];
    }
    acc[parenDifference].push(index);
    return acc;
  }, {});

  // Filtra e seleciona grupos relevantes que contenham operadores de adição ou multiplicação
  const relevantGroups = Object.entries(groupedIndexes).filter(
    ([parenDifference, indexes]) =>
      indexes.some((index) => expr[index] === "+" || expr[index] === "*")
  );

  // Encontra o valor máximo da diferença de parênteses entre os grupos relevantes
  const maxParenDifference = Math.max(
    ...relevantGroups.map(([parenDifference]) => Number(parenDifference))
  );
  // Filtra os grupos com a mesma maior prioridade e constrói objetos para armazenar índices de operações
  const priorityGroups = relevantGroups
    .filter(
      ([parenDifference]) => Number(parenDifference) === maxParenDifference
    )
    .map(([parenDifference, indexes]) =>
      indexes.reduce((acc, index) => {
        if (expr[index] === "*") {
          acc[2] = (acc[2] || []).concat([index]);
        } else if (expr[index] === "+") {
          acc[1] = (acc[1] || []).concat([index]);
        }
        return acc;
      }, {})
    );

  // Ordena os grupos por prioridade e retorna o índice da operação a ser calculada primeiro
  const highestPriorityGroup = priorityGroups.sort(
    ([priorityA], [priorityB]) => priorityB - priorityA
  )[0];

  return Math.min(...(highestPriorityGroup[2] || highestPriorityGroup[1]));
}
