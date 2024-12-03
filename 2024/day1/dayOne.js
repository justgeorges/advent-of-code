// 1) import the data into Javascript
import { promises as fs } from "fs";

async function loadFile() {
  try {
    const fileData = fs.readFile("./location-list.txt", "utf-8");
    return fileData;
  } catch (err) {
    console.error(err);
  }
}

const data = await loadFile();
const locationArray1 = [];
const locationArray2 = [];
let locationDifferenceSum = 0;

// 1.1) convert the data to an array with shape ["num1  num2", ...]
const dataToArr = data.split("\n");

// 2) Split the data into 2 arrays
// 2.1) for each line of the text file,
// for (let i = 0; i < data.split("\n").length; i++) {
// 2.1.1) split into tempArray that contains value1 and [0] and value2 and [1]
// 2.1.2) push those values to appropriate array
dataToArr.forEach((str) => {
  const splitNumArr = str.split(/\s+/);
  if (Number(splitNumArr[0]) && Number(splitNumArr[1])) {
    locationArray1.push(Number(splitNumArr[0]));
    locationArray2.push(Number(splitNumArr[1]));
  }
});

// 3) organize each array from lowest to greatest number

const sortedLocArr1 = locationArray1.sort();
const sortedLocArr2 = locationArray2.sort();

// 4) caluclate the difference between each number in order

for (let i = 0; i < locationArray1.length && i < locationArray2.length; i++) {
  if (locationArray1[i] > locationArray2[i]) {
    locationDifferenceSum += locationArray1[i] - locationArray2[i];
  } else {
    locationDifferenceSum += locationArray2[i] - locationArray1[i];
  }
}

// 5) Return the differece
console.log(locationDifferenceSum);

// correct answer 2176849!
