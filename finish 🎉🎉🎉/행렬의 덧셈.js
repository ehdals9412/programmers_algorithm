'use strict';

function solution(arr1, arr2) {
  // var answer = Array();
  // for (let i = 0; i < arr1.length; i++) {
  //   answer[i] = [];
  //   for (let j = 0; j < arr1[i].length; j++) {
  //     answer[i][j] = arr1[i][j] + arr2[i][j];
  //   }
  // }
  // return answer;
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

const arr1 = [
  [1, 2],
  [2, 3],
];

const arr2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(arr1, arr2));
