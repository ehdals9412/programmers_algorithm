'use strict';

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) return (a > b) - (a < b);
  });
}

console.log(solution(['sun', 'bed', 'car'], 1));
