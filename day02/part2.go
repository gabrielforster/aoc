package main

import (
  "os"
  "strings"
  "strconv"
)

func main() {
  lines, err := os.ReadFile("input")
  if err != nil {
    panic(err)
  }

  result := 0

  for _, line := range strings.Split(string(lines), "\n") {
    if line == "" {
      continue
    }

    colorsMax := map[string]int {
      "red": 1,
      "green": 1,
      "blue": 1,
    }

    parts := strings.Split(line, ":")
    if err != nil {
      panic(err)
    }
    records := parts[1]

    for _, event := range strings.Split(records, ";") {

      for _, cubes := range strings.Split(event, ",") {
        values := strings.Split(strings.Trim(cubes, " "), " ")
        value, err := strconv.Atoi(values[0])
        if err != nil {
          panic(err)
        }
        color := values[1]

        if (colorsMax[color] < value) {
          colorsMax[color] = value
        }
      }
    }
    maxValuesMultiplied := colorsMax["red"] * colorsMax["green"] * colorsMax["blue"]
    result += maxValuesMultiplied
  }

  println(result)
}
