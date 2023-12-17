const fs = require("fs")

const lines = fs.readFileSync("input", "utf-8").split("\n")

const numbers = lines.map(line => {
  line = line.split("")
  const first = line.find(x => !Number.isNaN(Number(x)))
  const last = line.findLast(x => !Number.isNaN(Number(x)))

  return Number(first + last)
}).filter(Boolean)

const sum = numbers.reduce((acc, number) => acc + number, 0)

console.log(sum)
