function solution(young, beautiful, loved) {
  if (young && beautiful && !loved) {
    return true;
  }
  if (loved && (!young || !beautiful)) {
    return true;
  }
  return false;
}
