'use strict';

function solution(n) {
  const str = n + '';
  const result = str.split('').reverse();
  return result.map((item) => parseInt(item));
}

const n = 12345;
console.log(solution(n));
