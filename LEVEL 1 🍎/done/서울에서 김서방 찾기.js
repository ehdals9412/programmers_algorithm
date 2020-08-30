'use strict';

function solution(seoul) {
  //   var answer = '';
  //   for (let i = 0; i < seoul.length; i++) {
  //     if (seoul[i] == 'Kim') {
  //       answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;
  //     }
  //   }
  //   return answer;

  return seoul
    .filter((item) => item.indexOf('Kim') !== -1)
    .map((item, index) => `김서방은 ${seoul.indexOf(item)}에 있다`)
    .join('');
}

const seoul = ['Jane', 'Kim'];
console.log(solution(seoul));
