'use strict';

function solution(n) {
  var answer = 0;

  while (n >= 1) {
    answer += n % 10;
    n = Math.floor(n / 10);

    if (n < 1) break;
  }

  return answer;
}

const n = 987;
console.log(solution(n));
