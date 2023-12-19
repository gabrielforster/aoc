package main

import (
  "os"
  "strings"
  "strconv"
)

var colorsMax = map[string]int {
  "red": 12,
  "green": 13,
  "blue": 14,
}

func main() {
  lines, err := os.ReadFile("input")
  if err != nil {
    panic(err)
  }

  result := 0

  for _, line := range strings.Split(string(lines), "\n") {
    isOk := true 
    if line == "" {
      continue
    }

    parts := strings.Split(line, ":")
    gameLabel := parts[0]
    gameId := strings.Split(gameLabel, " ")[1]
    gameIdAsNumber, err := strconv.Atoi(gameId)
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
          isOk = false
          break
        }
      }
    }

    if isOk {
      result += gameIdAsNumber
    }
  }

  println(result)
}
