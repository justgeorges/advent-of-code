import { promises as fs } from "fs";

export async function loadFile(location) {
  try {
    const fileData = fs.readFile(location, "utf-8");
    return fileData;
  } catch (err) {
    console.error(err);
  }
}

export function absoluteDifference(str1, str2) {
  return Math.abs(Number(str1) - Number(str2));
}

export function mul(x, y) {
  return x * y;
}
