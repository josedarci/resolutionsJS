function solution(min1, min2_10, min11, s) {
  let duration = 0;

  if (s >= min1) {
    s -= min1;
    duration++;
  } else {
    return 0;
  }

  if (s >= min2_10 * 9) {
    s -= min2_10 * 9;
    duration += 9;
  } else {
    duration += Math.floor(s / min2_10);
    return duration;
  }

  duration += Math.floor(s / min11);

  return duration;
}
