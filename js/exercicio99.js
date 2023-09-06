function solution(s1, s2) {
  let index1 = 0;
  let index2 = 0;

  let zeroCount1 = 0;
  let zeroCount2 = 0;

  function isLetter(c) {
    return c >= "a" && c <= "z";
  }

  function getNum(index, str) {
    let leading = true;
    let zeroes = 0;
    let result = new Array(3);
    let numStr = "";

    while (index < str.length) {
      let c = str.charAt(index);
      if (isLetter(c)) {
        break;
      }
      if (c === "0" && leading) {
        zeroes++;
      } else {
        leading = false;
        numStr += c;
      }
      index++;
    }

    result[0] = zeroes.toString();
    result[1] = numStr;
    result[2] = index.toString();

    return result;
  }

  while (index1 < s1.length && index2 < s2.length) {
    let c1 = s1.charAt(index1);
    let c2 = s2.charAt(index2);

    if (isLetter(c1) && isLetter(c2)) {
      // compare letters
      if (c1 !== c2) {
        return c1 < c2;
      }
      index1++;
      index2++;
    } else if (!isLetter(c1) && isLetter(c2)) {
      return true;
    } else if (isLetter(c1) && !isLetter(c2)) {
      return false;
    } else {
      // both numbers
      let n1 = getNum(index1, s1);
      let n2 = getNum(index2, s2);

      if (n1[1].length !== n2[1].length) {
        console.log(n1[1] + " " + n2[1]);
        return n1[1].length < n2[1].length;
      }

      let comp = n1[1].localeCompare(n2[1]);
      if (comp !== 0) {
        return comp < 0;
      }

      let z1 = parseInt(n1[0]);
      let z2 = parseInt(n2[0]);

      if (zeroCount1 === 0 && zeroCount2 === 0 && z1 !== z2) {
        zeroCount1 = z1;
        zeroCount2 = z2;
      }

      index1 = parseInt(n1[2]);
      index2 = parseInt(n2[2]);
    }
  }

  if (index1 < s1.length) {
    return false;
  } else if (index2 < s2.length) {
    return true;
  }

  return zeroCount1 > zeroCount2;
}
