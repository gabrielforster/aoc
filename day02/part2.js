const fs = require("fs")

const input = fs.readFileSync("./input", "utf-8").split("\n")

let result = 0;

for (const line of input) {
  const [_, scores] = line.split(":");
  if (line === "") continue;
  const maxes = new Map();

  for (const event of scores.split(";")) {
    for (const cubes of event.split(",")) {
      const [score, color] = cubes.trim().split(" ");
      maxes.set(
        color,
        Math.max(maxes.get(color) ?? 0, parseInt(score, 10))
      );
    }
  }
  let score = 1;
  for (const [_, max] of maxes.entries()) {
    score *= max;
  }
  result += score;
}

console.log(result);
