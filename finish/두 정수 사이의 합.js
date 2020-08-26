'use strict';

function solution(a, b) {
  //   var answer = 0;
  //   if (a === b) return a;
  //   if (a > b) {
  //     let c = 0;
  //     c = a;
  //     a = b;
  //     b = c;
  //   }
  //   for (let i = a; i <= b; i++) {
  //     answer += i;
  //   }
  //   return answer;
  return ((a + b) * (Math.abs(a - b) + 1)) / 2; // 프로그래머스 답
}

console.log(solution(5, 3));
