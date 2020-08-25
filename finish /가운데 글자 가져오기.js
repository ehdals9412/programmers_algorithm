'use strict';

function solution(s) {
  const size = s.length;
  const start = Math.floor(size / 2);

  return size % 2 !== 0
    ? s.slice(start, start + 1)
    : s.slice(start - 1, start + 1);
}
const s = 'qwer';
console.log(solution(s));
