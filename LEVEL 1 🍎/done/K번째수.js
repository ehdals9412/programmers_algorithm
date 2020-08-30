'use strict';

function solution(array, commands) {
  var answer = [];

  const res = commands.map((item) => item.join('').split(''));
  for (let i = 0; i < res.length; i++) {
    answer.push(
      array.slice(res[i][0] - 1, res[i][1]).sort((a, b) => a - b)[res[i][2] - 1]
    );
  }

  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
