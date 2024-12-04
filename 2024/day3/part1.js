import { loadFile, mul } from "../util.js";

const REGEX = /mul\((\d+),(\d+)\)/g;

const data = await loadFile("./input.txt");

const stringifiedData = String(data);

const matches = [...stringifiedData.match(REGEX)];

let sum = 0;

matches.forEach((elem) => {
  const result = eval(elem);
  sum += result;
});

console.log(sum);
