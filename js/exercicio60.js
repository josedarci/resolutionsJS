function solution(a, b) {
  // Verifique se os arrays já são iguais
  if (a.toString() === b.toString()) {
    return true;
  }

  // Encontre os índices dos elementos diferentes
  const differingIndices = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      differingIndices.push(i);
    }
  }

  // Se houver mais de dois elementos diferentes, retorne false
  if (differingIndices.length !== 2) {
    return false;
  }

  // Verifique se a troca dos elementos nos índices diferentes torna os arrays iguais
  const index1 = differingIndices[0];
  const index2 = differingIndices[1];
  if (a[index1] === b[index2] && a[index2] === b[index1]) {
    return true;
  }

  return false;
}
