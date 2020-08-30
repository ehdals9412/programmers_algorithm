'use strict';

function solution(priorities, locations) {
  var answer = 0;
  let first = 0;

  const arr = priorities.map((item, index) => {
    console.log(item, index);
    return { item, index };
  });

  while (priorities.length > 0) {
    first = arr.shift();

    if (arr.some((second) => second.item > first.item)) {
      arr.push(first);
    } else {
      answer++;
      if (locations === first.index) {
        return answer;
      }
    }
  }
}

const priorities = [2, 1, 3, 2];
let locations = 2;

console.log(solution(priorities, locations));
