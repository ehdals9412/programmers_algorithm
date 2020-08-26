'use strict';

function solution(arr) {
  const result = arr.reduce((prev, curr) => prev + curr);
  return result / arr.length;
}

const arr = [1, 2, 3, 4];
console.log(solution(arr));
