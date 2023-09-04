function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  // Verificar se a força do seu braço esquerdo é igual à força do braço esquerdo do seu amigo
  // E se a força do seu braço direito é igual à força do braço direito do seu amigo
  // Ou se a força do seu braço esquerdo é igual à força do braço direito do seu amigo
  // E se a força do seu braço direito é igual à força do braço esquerdo do seu amigo
  if (
    (yourLeft === friendsLeft && yourRight === friendsRight) ||
    (yourLeft === friendsRight && yourRight === friendsLeft)
  ) {
    return true;
  }

  return false;
}
