'use strict';

function solution(progresses, speeds) {
  var answer = [];

  for (let i = 0; i < progresses.length; i++) {
    for (let j = 0; j < speeds.length; j++) {
      console.log(progresses[j] + speeds[j]);
    }
  }

  while (progresses.length > 0) {}

  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
