function solution(inputString) {
  const segments = inputString.split(".");

  if (segments.length !== 4) {
    return false;
  }

  for (let segment of segments) {
    if (!/^\d+$/.test(segment)) {
      return false;
    }

    const num = parseInt(segment, 10);

    if (num < 0 || num > 255) {
      return false;
    }

    if (segment !== num.toString()) {
      return false;
    }
  }

  return true;
}
