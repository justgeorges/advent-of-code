import { loadFile } from "../util.js";

const data = await loadFile("./location-list.txt");
const locationArray1 = [];
const locationArray2 = [];
let similarityScore = 0;

const dataToArr = data.split("\n");

dataToArr.forEach((str) => {
  const splitNumArr = str.split(/\s+/);
  if (Number(splitNumArr[0]) && Number(splitNumArr[1])) {
    locationArray1.push(Number(splitNumArr[0]));
    locationArray2.push(Number(splitNumArr[1]));
  }
});

function checkFrequency(array, instance) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === instance) count++;
  }
  return count;
}

for (let i = 0; i < locationArray1.length && i < locationArray2.length; i++) {
  similarityScore +=
    locationArray1[i] * checkFrequency(locationArray2, locationArray1[i]);
}
console.log(similarityScore);

// answer is 23384288 -- correct!
