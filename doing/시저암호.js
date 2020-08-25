'use strict';

function solution(s, n) {
  var answer = '';
  const charToNum = s.charCodeAt(1) + 1;
  const numToChar = String.fromCharCode(charToNum);

  for (let i = 0; i < s.length; i++) {
    if (s == 'z') {
    }
    const code = s.charCodeAt(i) + n;
    const result = String.fromCharCode(code);
    answer += result;
    console.log(answer);
  }

  return answer;
}

const s = 'z';
const n = 1;
console.log(solution(s, n));
