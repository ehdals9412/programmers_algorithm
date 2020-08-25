'use strict';

function solution(arr) {
  return arr.filter((item, index) => item != arr[index + 1]);
  //   var answer = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== arr[i + 1]) {
  //       answer.push(arr[i]);
  //     }
  //   }
  //   return answer;
}

const arr = [4, 4, 4, 3, 3];

console.log(solution(arr));
