'use strict';

function solution(arr, divisor) {
  var answer = arr
    .filter((item) => item % divisor == 0) //
    .sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}

const arr = [5, 9, 7, 10];
const divisor = 5;

console.log(solution(arr, divisor));
