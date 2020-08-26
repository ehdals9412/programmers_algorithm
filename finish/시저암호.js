'use strict';

function solution(s, n) {
  return s
    .split('')
    .map((item) => {
      if (item === ' ') {
        return item;
      }

      const code = item.charCodeAt();
      console.log(code);

      let num;
      code < 97
        ? (num = 65 + ((item.charCodeAt() + n - 65) % 26))
        : (num = 97 + ((item.charCodeAt() + n - 97) % 26));

      return String.fromCharCode(num);
    })
    .join('');
}

const s = 'a B z';
const n = 2;
console.log(solution(s, n));

// const arr = ['a', 'B', '!'];
// const res = arr.filter((item) => !item.match(/^[a-zA-Z]*$/));
// console.log(res.join('').replace('!', ' '));
// console.log(res);
