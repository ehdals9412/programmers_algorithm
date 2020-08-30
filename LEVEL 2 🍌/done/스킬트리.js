'use strict';

function solution(skill, skill_trees) {
  var answer = 0;
  let arr = skill.split('');
  console.log(arr);
  let str = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    str = skill_trees[i]
      .split('')
      .filter((item) => arr.includes(item))
      .join('');
    console.log(str, skill.substr(0, str.length));
    if (str === skill.substr(0, str.length)) {
      answer++;
    }
  }
  return answer;

  //   var answer = 0;
  //   let first = 0;
  //   let res = 0;
  //   const arr = skill.split('');
  //   const arr2 = skill.split('');

  //   for (let i = 0; i < skill_trees.length; i++) {
  //     first = arr.shift();
  //     res = skill_trees[i].split('').shift();

  //     if (arr2.indexOf(first) < arr2.indexOf(res)) {
  //       answer++;
  //     }
  //   }
  //   return answer;
}

const skill = 'CBD';

const skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];
console.log(solution(skill, skill_trees));
