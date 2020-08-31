'use strict';

function solution(answers) {
  var answer = [];
  let pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern[0][i % 5]) {
      count[0]++;
    }

    if (answers[i] === pattern[1][i % 8]) {
      count[1]++;
    }

    if (answers[i] === pattern[2][i % 10]) {
      count[2]++;
    }
  }

  /* time over 😱
  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === pattern[i][j]) count[i]++;
    }
  }
  */

  let max = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > max) {
      max = count[i];
    }
  }

  for (let i = 0; i < count.length; i++) {
    if (max === count[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

const answers = [1, 3, 2, 4, 2];
console.log(solution(answers));
