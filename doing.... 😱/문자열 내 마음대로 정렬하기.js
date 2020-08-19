'use strict';

function solution(strings, n) {
  var answer = [];
  let sorting = new Array();
  for (let i of strings) {
    const res = i.split('');
    sorting += res[n];
  }
  const sortArr = sorting.split('');
  console.log(sortArr);

  return strings.sort((a, b) =>
    sortArr.sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
  );
}

console.log(solution(['sun', 'bed', 'car'], 1));
