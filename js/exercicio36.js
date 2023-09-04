function solution(inputString) {
  return (inputString.match(/(\"[^\"]*\"|\d+|true|false)/g) || []).length;
}
