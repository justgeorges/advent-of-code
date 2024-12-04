import { loadFile } from "../util.js";

const data = await loadFile("./input.txt");

const REGEX = /mul\((\d+),(\d+)\)/g;

const stringifiedData = String(data);

const matches = [...stringifiedData.match(REGEX)];

let sum = 0;

matches.forEach((elem) => {
  const result = eval(elem);
  sum += result;
});

function mul(x, y) {
  return x * y;
}

console.log(sum);
