'use strict';

function solution(x, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1));
  }
  return answer;
}

const x = 2;
const n = 5;
console.log(solution(x, n));
