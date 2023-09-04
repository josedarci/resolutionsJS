function solution(s, n) {
    var re = new RegExp((?:[^1-9]*([0-9]+)){${n}});
    return re.exec(s)[1];
  }
  