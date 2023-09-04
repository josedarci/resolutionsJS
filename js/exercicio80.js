function solution(st) {
    const rs = st.split("").reverse().join("");
    for (let i = 0; i < st.length; i++) {
      if (rs.startsWith(st.substring(i))) {
        return st.substring(0, i) + rs;
      }
    }
    return "?";
  }
  