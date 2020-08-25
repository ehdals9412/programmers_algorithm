'use strict';

function solution(arr) {
  //   return arr.filter((item, index, array) => item);
  let min = '';
  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (min > arr[j]) min = arr[j];
    }
  }
  const result = arr.filter((item, index) => item > min);
  return result.length !== 0 ? result : [-1];
}

const arr = [5, 3, 6, 7];
console.log(solution(arr));
