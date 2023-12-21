const fs = require("fs");

const input = fs.readFileSync("input", "utf8");

const content = input.split("\n").map(line => line.split("")).filter(line => line.length > 0);

const directions = [
  [-1, -1], [0, -1], [1, -1],
  [-1, 0], [1, 0],
  [-1, 1], [0, 1], [1, 1]
]

/** @param {string} char */
  function isCharNumber(char) {
    return !isNaN(parseInt(char));
  }

function isDot(char) {
  return char === ".";
}

function get(i, j, [x, y]) {
  const chars = content[i + y];

  if (chars === undefined) {
    return undefined;
  }

  return chars[j + x];
}

let result = 0;

for (let y = 0; y < content.length; y++) {
  const row = content[y];
  let isNumber = false;
  let currentNumber = "";
  let check = true;

  for (let x = 0; x < row.length; x++) {
    isNumber = isCharNumber(get(y, x, [0, 0]));

    if (!isNumber && !check) {
      result += parseInt(currentNumber); 
    }

    if (!isNumber) {
      currentNumber = "";
      check = true;
    }

    if (isNumber && check) {
      const is = directions.reduce((acc, [dy, dx]) => {
        const char = get(y, x, [dy, dx]);
        return acc ||
          !isDot(char) && !isCharNumber(char) && char !== undefined; 
      }, false);

      if (is) {
        check = false;
      }
    }

    if (isNumber) {
      currentNumber += get(y, x, [0, 0]);
    }
  }

  if (isNumber && !check) {
    result += parseInt(currentNumber); 
  }
}

console.log(result)
 
