'use strict';

function solution(n, lost, reserve) {
  var answer = 0;
  let students = [];
  // 전체 학생들을 담은 배열
  for (let i = 0; i < n; i++) {
    students.push(i + 1);
  }
  console.log(students);

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (lost[i] === reserve[i] + 1 || lost[i] === reserve[i] - 1) {
      }
    }
  }

  return answer;
}

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

console.log(solution(n, lost, reserve));
