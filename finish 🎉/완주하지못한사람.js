'use strict';

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = participant.find((item, index) => item !== completion[index]);

  return answer;
}
