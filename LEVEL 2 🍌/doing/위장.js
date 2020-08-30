'use strict';

function solution(clothes) {
  var answer = 0;
  // 의상이 1 ~ 30개 이상이 아니라면 함수 종료 (Early Exit!)
  if (clothes.length < 1 && clothes.length > 30) return;

  const mapping = clothes.map((item, index, array) => array[index][1]);

  for (let i = 0; i < mapping.length; i++) {
    answer++;
    for (let j = i + 1; j < mapping.length; j++) {
      if (mapping[i] !== mapping[j]) answer++;
    }
  }
  return answer;
}

const clothes = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

console.log(solution(clothes));
