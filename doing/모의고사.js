'use strict';

function solution(answers) {
  // 찍는 패턴!
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 정답 체크!
  let count = [0, 0, 0];

  // 결과를 출력할 배열!
  var answer = [];
  answer = answers.filter((items, index) => {
    if (items === pattern[0][index]) {
      return count[0]++;
    }
  });
  return answer;
}
const answers = [1, 3, 2, 4, 2];
// const res = solution(answers);

console.log(solution(answers));
