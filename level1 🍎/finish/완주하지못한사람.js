'use strict';

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant.find((item, index) => item != completion[index]);
}

// leo != 'eden' true! => leo

const participant = ['marina', 'marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];

console.log(solution(participant, completion));
