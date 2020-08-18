'use strict';

function solution(s) {
  var answer = true;
  const count = [0, 0];
  const str = s.toLowerCase();

  if (str.length <= 50 || str.indexOf('p') < -1 || str.indexOf('y') < -1) {
    answer = false;
  }

  for (let i of str) {
    if (i === 'p') count[0]++;
    else if (i === 'y') count[1]++;
  }

  count[0] === count[1] ? (answer = true) : (answer = false);
  return answer;
}

console.log(solution('pPoooyY'));
