import { loadFile } from "../util.js";

const data = await loadFile("./input.txt");

const matrix = data.split(`\n`);
matrix.pop();
const topDownMatrix = getTopDownMatrix(matrix);
const diagonalMatrix = getDiagonalMatrix(matrix);
console.log(diagonalMatrix);
let total = 0;

const regex = /XMAS/g;
const reverseRegex = /SAMX/g;
matrix.forEach((matrice) => {
  const forwardCount = [...matrice.matchAll(regex)];
  const reverseCount = [...matrice.matchAll(reverseRegex)];

  total += forwardCount.length + reverseCount.length;
});

topDownMatrix.forEach((matrice) => {
  const forwardCount = [...matrice.matchAll(regex)];
  const reverseCount = [...matrice.matchAll(reverseRegex)];

  total += forwardCount.length + reverseCount.length;
});

diagonalMatrix.forEach((matrice) => {
  const forwardCount = [...matrice.matchAll(regex)];
  const reverseCount = [...matrice.matchAll(reverseRegex)];

  total += forwardCount.length + reverseCount.length;
});

function getTopDownMatrix(matrix) {
  const topDownMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const topDownMatrice = [];
    matrix.forEach((matrice) => {
      topDownMatrice.push(matrice[i]);
    });
    topDownMatrix.push(topDownMatrice.join(""));
  }
  return topDownMatrix;
}

function getDiagonalMatrix(matrix) {
  const diagonalMatrix = [];
  for (let i = 0; i < (matrix.length - 1) * 2; i++) {
    const diagonalMatrice = [];
    const reverseDiagonalMatrice = [];
    for (let j = 0; j <= i; j++) {
      const k = i - j;
      const row = matrix.length - 1 - (i - j);
      const col = j;
      if (k < matrix.length && j < matrix.length) {
        diagonalMatrice.push(matrix[k][j]);
      }
      if (row >= 0 && row < matrix.length && col >= 0 && col < matrix.length) {
        if (matrix[row][col]) {
          reverseDiagonalMatrice.push(matrix[row][col]);
        }
      }
    }
    diagonalMatrix.push(diagonalMatrice.join(""));
    diagonalMatrix.push(reverseDiagonalMatrice.join(""));
  }
  return diagonalMatrix;
}

console.log(total);
