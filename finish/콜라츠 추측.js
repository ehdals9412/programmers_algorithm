'use strict';

function solution(num) {
  let count = 0; // 작업의 횟수

  while (true) {
    if (num == 1) return count > 500 ? -1 : count;

    if (num % 2 == 0) {
      num = num / 2;
      count++;
      continue;
    }
    if (num % 2 !== 0) {
      num = num * 3 + 1;
      count++;
      continue;
    }
  }
}

const n = 626331;
console.log(solution(n));
