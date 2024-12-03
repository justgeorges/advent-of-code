import { promises as fs } from "fs";

export async function loadFile(location) {
  try {
    const fileData = fs.readFile(location, "utf-8");
    return fileData;
  } catch (err) {
    console.error(err);
  }
}
