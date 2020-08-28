'use strict';

function solution(priorities, location) {
  var answer = 0;
  let first = 0;

  const arr = priorities.map((item, index) => {
    return { item, index };
  });

  while (priorities.length > 0) {
    first = arr.shift();

    if (arr.some((x) => x.item > first.item)) {
      arr.push(first);
    } else {
      answer++;
      if (location === first.index) {
        return answer;
      }
    }
  }
}

const priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));
