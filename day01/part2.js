const fs = require("fs")

const numbersString = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const numbersMap = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9
}

const lines = fs.readFileSync("input", "utf-8").split("\n")

const values = lines.map(line => {
  line = line.split("")

  const numbers = line.map((value, index) => {
    if (!Number.isNaN(Number(value))) {
      return value
    }
    
    for (const s of numbersString) {
      if (line.join("").slice(index).startsWith(s)) {
        return String(numbersMap[s])
      }
    }

    return ""
  }).filter(Boolean)

  const first = numbers.find(x => !Number.isNaN(Number(x)))
  const last = numbers.findLast(x => !Number.isNaN(Number(x)))

  return Number(first + last)

}).filter(Boolean)

const sum = values.reduce((acc, number) => acc + number, 0)

console.log(sum)
