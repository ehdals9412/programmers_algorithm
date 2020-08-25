'use strict';

function solution(n) {
  var answer = 0;
  const res = Math.sqrt(n);
  return Number.isInteger(res) ? Math.pow(res + 1, 2) : -1;
}

const n = 121;
console.log(solution(n));
