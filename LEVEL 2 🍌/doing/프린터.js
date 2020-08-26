'use strict';

function solution(rank, loc) {
  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      if (rank[i] < rank[j]) {
        console.log(rank);
        const res = parseInt(rank.splice(i, 1).join(''));
        // console.log(rank);
        rank.push(res);
      }
    }
  }
}

const rank = [2, 1, 3, 2];
const loc = 2;

console.log(solution(rank, loc));
