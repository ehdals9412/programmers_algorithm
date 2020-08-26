'use strict';

function solution(n, m) {
  let max = 0;
  let common_max = 0;
  let common_min = 0;

  for (let i = 1; i <= m; i++) {
    if (n % i == 0 && m % i == 0) {
      // 최대공약수
      if (i > max) {
        max = i;
        common_max = max;
      }

      // 최소 공배수
      common_min = common_max * (n / i) * (m / i);
    }
  }
  return [common_max, common_min];
}

const n = 2;
const m = 5;
console.log(solution(n, m));
