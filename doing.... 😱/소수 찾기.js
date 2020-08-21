'use strict';

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i == 1) {
        console.log(`${i}는 소수아님`);
      }

      if (i <= j) {
        if (i % j == 0) {
          console.log(`${i}는 소수아님`);
          break;
        } else {
          answer++;
        }
      } else {
        answer++;
      }
    }
  }

  return answer;
}

const n = 10;
console.log(solution(n));
