'use strict';

const str = '1234';
function solution(s) {
  //   var answer = str.replace(/[^0-9]/g, 'A').indexOf('A') < 0 ? true : false;
  //   var answer = !s.split('').some((items) => isNaN(items));
  var answer = true;

  if (s.length === 4 || s.length === 6) {
    for (let i of s) {
      if (i >= 0 || i <= 9) {
        answer = true;
      } else {
        answer = false;
        break;
      }
    }
  } else {
    answer = false;
  }
  return answer;
  /* 욱동님 코드 👍
  let answer = true;

  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      console.log(isNaN(Number(s[i])));
      if (isNaN(Number(s[i]))) {
        answer = false;
      }
    }
  } else {
    answer = false;
  }
  return answer;
  */
}

console.log(solution(str));
