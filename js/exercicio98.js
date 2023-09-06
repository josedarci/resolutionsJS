function solution(cipher) {
  let ret = "";
  let temp = "";

  for (let i = 0; i < cipher.length; i++) {
    temp += cipher.charAt(i);
    const j = parseInt(temp);

    if (j >= 97 && j <= 122) {
      ret += String.fromCharCode(j);
      temp = "";
    }
  }

  return ret;
}
