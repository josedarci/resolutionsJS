function solution(current, numberOfDigits) {
  let page = current;
  let digits = numberOfDigits;

  while (digits >= page.toString().length) {
    digits -= page.toString().length;
    page++;
  }

  return page - 1;
}
