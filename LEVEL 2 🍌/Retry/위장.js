'use strict';

function solution(clothes) {
  let cnt = 1; // 의상 조합을 담을 배열

  const map = {};

  for (let i = 0; i < clothes.length; i++) {
    map[clothes[i][1]] = (map[clothes[i][1]] || 1) + 1;
  }

  for (let key in map) {
    cnt *= map[key];
  }

  return cnt - 1;

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
}

const clothes = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

console.log(solution(clothes));
