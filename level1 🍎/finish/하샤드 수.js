'use strict';

function solution(x) {
  const n = x; // 원래 값 x를 담는 변수
  let sum = 0; // 자릿수의 합

  while (x >= 1) {
    sum += Math.floor(x % 10);
    x = Math.floor(x / 10);
  }
  return n % sum === 0 ? true : false;
}

const x = 12;
console.log(solution(x));
