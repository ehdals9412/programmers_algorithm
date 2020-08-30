'use strict';

function solution(strings, n) {
  var answer = [];

  let sorting = new Array(); // 기준 인덱스를 담는 배열
  for (let string of strings) {
    const strArr = string.split('');
    sorting += strArr[n];
  }

  const sortArr = sorting.split('').sort();
  console.log(sortArr, strings);

  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (strings[i].indexOf(sortArr[j]) !== -1) {
        answer.push(strings[i]);
        continue;
      }
    }
  }
  return answer;
}

console.log(solution(['abce', 'abcd', 'cdx'], 2));
