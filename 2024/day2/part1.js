import { loadFile, absoluteDifference } from "../util.js";

const data = await loadFile("./input.txt");
const dataToArr = data.split("\n");

let safeReportCount = 0;

function checkLimit(arr) {
  for (let i = 1; i < arr.length; i++) {
    const difference = absoluteDifference(arr[i], arr[i - 1]);
    if (difference > 3 || difference < 1) return false;
  }
  return true;
}

function checkIncriment(arr) {
  let increasing = true;
  let decreasing = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      decreasing = false;
    } else if (arr[i] > arr[i + 1]) {
      increasing = false;
    } else {
      increasing = false;
      decreasing = false;
      break;
    }
  }
  return increasing || decreasing;
}

dataToArr.forEach((str) => {
  const splitNumArr = str.split(/\s+/).map(Number);
  if (
    splitNumArr.length > 1 &&
    checkIncriment(splitNumArr) &&
    checkLimit(splitNumArr)
  ) {
    console.log(splitNumArr);
    safeReportCount++;
  }
});

console.log(safeReportCount);
