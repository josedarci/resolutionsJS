function solution(a) {
  let team1Weight = 0;
  let team2Weight = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1Weight += a[i];
    } else {
      team2Weight += a[i];
    }
  }

  return [team1Weight, team2Weight];
}
