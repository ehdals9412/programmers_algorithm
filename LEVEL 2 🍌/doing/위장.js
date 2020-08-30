'use strict';

function solution(clothes) {
  let cnt = 0; // 의상 조합을 담을 배열

  // 의상이 1 ~ 30개 이상이 아니라면 함수 종료 (Early Exit!)
  //   if (clothes.length < 1 && clothes.length > 30) return;

  /* time over 👎
  const mapping = clothes.map((item, index, array) => array[index][1]);

  for (let i = 0; i < mapping.length; i++) {
    answer++;
    for (let j = i + 1; j < mapping.length; j++) {
      if (mapping[i] !== mapping[j]) answer++;
    }
  }
  */

  return cnt;
}

const clothes = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

console.log(solution(clothes));
