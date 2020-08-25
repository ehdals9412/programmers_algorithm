'use strict';

function solution(phone_number) {
  if (phone_number.length < 4 && phone_number > 20) return;

  return (
    phone_number.substr(0, phone_number.length - 4).replace(/[0-9]/g, '*') +
    phone_number.substr(phone_number.length - 4)
  );
}

const phone = '027778888';
console.log(solution(phone));
