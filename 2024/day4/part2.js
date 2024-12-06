import { loadFile } from "../util.js";

const data = await loadFile("./input.txt");

const matrix = data.split(`\n`);
matrix.pop();
let count = 0;

const m = "M";
const a = "A";
const s = "S";

for (let i = 0; i < matrix.length - 2; i++) {
  for (let j = 0; j < matrix[i].length - 2; j++) {
    if (
      matrix[i + 1][j + 1] === a &&
      ((matrix[i][j] === m && matrix[i + 2][j + 2] === s) ||
        (matrix[i][j] === s && matrix[i + 2][j + 2] === m)) &&
      ((matrix[i + 2][j] === m && matrix[i][j + 2] === s) ||
        (matrix[i + 2][j] === s && matrix[i][j + 2] === m))
    ) {
      count++;
    }
  }
}

console.log(count);
