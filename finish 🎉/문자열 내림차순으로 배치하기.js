'user strict';

function solution(s) {
  //   const answer = arr
  //     .sort((a, b) => {
  //       if (a > b) return -1;
  //       else if (a < b) return 1;
  //       else return 0;
  //     })
  //     .join('');
  return s.split('').sort().reverse().join('');
}

const str = 'Zbcdefg';
console.log(solution(str));
