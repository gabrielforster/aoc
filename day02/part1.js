const fs = require("fs")

const input = fs.readFileSync("./input", "utf-8").split("\n")

const MAX_PER_COLOR = new Map([['red', 12], ['green', 13], ['blue', 14]]);

let result = 0;

for (const line of input) {
  let ok = true
  const [gameLabel, scores] = line.split(":");
  const [_, gameId] = gameLabel.split(" ");
  if (line === "") continue;

  for (const event of scores.split(";")) {
    for (const cubes of event.split(",")) {
      const [score, color] = cubes.trim().split(" ");
      if (MAX_PER_COLOR.get(color) < Number(score)) {
        ok = false;
        break;
      }
    }
  }
  if (ok)
    result += Number(gameId);
}

console.log(result);
