import path from "path";
import fs from "fs";

// This is a little filesystem helper
// You don't need to really familiarize yourself with this
// Unless you want to know how it works :)

export function readFile(filename) {
  const currentDirectory = path.resolve(path.dirname(""));
  const absolutePath = path.join(currentDirectory, filename);

  return fs.readFileSync(absolutePath, "utf8");
}
