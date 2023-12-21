const fs = require("fs");

const input = fs.readFileSync("input.test", "utf8")
  .split("\n")
  .filter((line) => line.length);


let count = 0;
for (const line of input) {
  let times = 0;
  const [winners, actuals] = line.slice(8).split("|").map((x) => x.split(" ").filter(Boolean));

  for (const actual of actuals) {
    if (winners.some(w => w === actual)) {
      times += 1 * times || 1;
    }
  }

  count += times;
}

console.log(count);
