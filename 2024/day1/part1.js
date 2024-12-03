import { loadFile } from "./loadFile";

const data = await loadFile("./location-list.txt");
const locationArray1 = [];
const locationArray2 = [];
let locationDifferenceSum = 0;

const dataToArr = data.split("\n");

dataToArr.forEach((str) => {
  const splitNumArr = str.split(/\s+/);
  if (Number(splitNumArr[0]) && Number(splitNumArr[1])) {
    locationArray1.push(Number(splitNumArr[0]));
    locationArray2.push(Number(splitNumArr[1]));
  }
});

const sortedLocArr1 = locationArray1.sort();
const sortedLocArr2 = locationArray2.sort();

for (let i = 0; i < sortedLocArr1.length && i < sortedLocArr2.length; i++) {
  locationDifferenceSum += Math.abs(sortedLocArr1[i] - sortedLocArr2[i]);
}
console.log(locationDifferenceSum);

// correct answer 2176849!
