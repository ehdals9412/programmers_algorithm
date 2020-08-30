'use strict';

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let numOfTrucks = truck_weights.length,
    crossingTrucks = [],
    crossedTrucks = [];

  // 할당된 길이만큼 다리 생성
  for (let i = 0; i < bridge_length; i++) {
    crossingTrucks[i] = 0;
  }

  // 다리 위에서 주행중인 트럭의 무게의 합
  function checkWeight() {
    let sumTrucksWeightOnBridge = 0;
    for (let i = 0; i < bridge_length; i++) {
      sumTrucksWeightOnBridge += crossingTrucks[i];
    }
    return sumTrucksWeightOnBridge;
  }

  // 그 다음 트럭이 다리 위에 올라갈 수 있는가?
  function isCanMove(nextTrucksWeight) {
    if (checkWeight() + nextTrucksWeight > weight) {
      return false;
    } else {
      return true;
    }
  }

  // 다리 위에 트럭 주행시키기
  function driving() {
    let poppedTruck = crossingTrucks.shift();

    if (isCanMove(truck_weights[0])) {
      // 다리가 무게를 버티면 대기중인 트럭 추가
      crossingTrucks.push(truck_weights.shift());
    } else {
      // 그렇지 않으면 기존에 주행중인 트럭만 진행
      crossingTrucks.push(0); //다리가 무게를 못견딘다면
    }

    if (poppedTruck) {
      crossedTrucks.push(poppedTruck);
    }
    answer++;
  }

  while (true) {
    if (crossedTrucks.length === numOfTrucks) {
      break;
    } else {
      driving();
    }
  }

  return answer;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
