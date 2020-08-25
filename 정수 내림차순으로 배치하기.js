'use strict';

function solution(n) {
  const str = n + '';
  const arr = str.split('');
  return parseInt(arr.sort((a, b) => b - a).join(''));
}

const n = 118372;
console.log(solution(n));
