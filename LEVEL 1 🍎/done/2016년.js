'use strict';

function solution(a, b) {
  const date = new Date(2016, a - 1, b);
  const year = date.getFullYear();
  if ((year % 4 !== 0 || year % 100 === 0) && year % 400 !== 0) return;

  return date.toString().slice(0, 3).toUpperCase();
  // var answer = '';
  // const dayOfNum = [0, 1, 2, 3, 4, 5, 6];
  // const dayOfString = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // const year = 2016;
  // // 윤년이 아니라면 함수 종료
  // if ((year % 4 !== 0 || year % 100 === 0) && year % 400 !== 0) return;

  // const date1 = new Date(2016, 0, 1);
  // const month1 = date1.getMonth() + a - 1;
  // const day1 = date1.getDate() + b - 1;

  // const date2 = new Date(2016, month1, day1);
  // console.log(date2.getDay());

  // return dayOfString[date2.getDay()];
}

const a = 5;
const b = 24;

console.log(solution(a, b));
