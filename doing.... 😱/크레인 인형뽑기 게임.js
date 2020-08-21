'use strict';

function solution(board, moves) {
  var answer = 0;
  let basket = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        console.log(`${moves[i]}열 : ${board[j][moves[i] - 1]}`);
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        // 앞뒤중에서 같은 숫자가 있으면 그 2개의 숫자 삭제
        // ?????
        break;
      }
    }
    console.log('=======================');
  }
  console.log(basket);

  return answer;
}

// 게임판
const board = [
  [0, 0, 0, 0, 0], // 1행
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1], // 5행
];

// 크레인이 움직이는 순서
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// 뽑힌 인형이 쌓일 배열

console.log(solution(board, moves));
