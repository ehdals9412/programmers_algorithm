'use strict';

function solution(s) {
  const str = s.split(' '); // ['try','hello','world']

  return str
    .map((item) =>
      item
        .split('')
        .map((item, index) =>
          index % 2 != 0 ? item.toLowerCase() : item.toUpperCase()
        )
        .join('')
    )
    .join(' ');
  /* 
  통과 못한 코드 👎
  for (let i = 0; i < str.length; i++) {
    const result = str[i].split('');

    for (let j = 0; j < result.length; j++) {
      console.log(result[j]);
      if (j % 2 != 0) {
        answer += result[j];
      } else {
        answer += result[j].toUpperCase();
      }
    }
    if (i < str.length - 1) answer += ' ';
  }
  */
}

const s = 'try hello world';
console.log(solution(s));
