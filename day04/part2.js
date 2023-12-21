const fs = require("fs");

const input = fs.readFileSync("input", "utf8")
  .split("\n")
  .filter((line) => line.length);

function getPoints(line, index) {
  let times = 0;
  const [winners, actuals] = line.slice(8).split("|").map((x) => x.split(" ").filter(Boolean));

  for (const actual of actuals) {
    if (winners.some(w => w === actual)) {
      times++;
    }
  }

  return new Array(times).fill(index + 1).map((x, i) => x + i);
}

const remaining = new Array(input.length).fill(0).map((_, i) => i + 1);
const seen = new Map();
const count = new Map();

while (remaining.length) {
  const index = remaining.pop(); 
  count.set(index, count.has(index) ? count.get(index) + 1 : 1);
  const points = seen.has(index) ? seen.get(index): getPoints(input[index - 1], index);
  seen.set(index, points);

  remaining.push(...points)
}

let result = 0;
count.forEach(value => {
  result += value;
});

console.log(result);
