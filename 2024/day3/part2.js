import { loadFile } from "../util.js";

const data = await loadFile("./input.txt");

const regex = /do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g;

let sum = 0;
let enabled = true;
let match;

while ((match = regex.exec(data)) !== null) {
  const [instruction, x, y] = match;

  if (instruction === "do()") {
    enabled = true;
  } else if (instruction === "don't()") {
    enabled = false;
  } else if (instruction.startsWith("mul(")) {
    if (enabled) {
      const result = parseInt(x) * parseInt(y);
      sum += result;
    }
  }
}

console.log("Sum of enabled multiplications:", sum);
