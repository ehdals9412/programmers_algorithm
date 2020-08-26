'use strict';

function solution(board, moves) {
  let basket = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (basket[basket.length - 1] === board[j][moves[i] - 1]) {
          basket.pop();
          count += 2;
          board[j][moves[i] - 1] = 0;
          break;
        } else {
          basket.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
          break;
        }
      }
    }
  }
  console.log(basket);
  return count;
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
